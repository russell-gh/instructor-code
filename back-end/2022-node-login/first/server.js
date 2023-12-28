//imports
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const utils = require("./routes/utils.js");

//users data
const users = [];

//middleware
app.use(cors());
app.use(bodyParser.json());

//listen for the server accessible
app.use((req, res, next) => {
  console.log("A request arrived: ", req.headers, req.body);
  utils.addToLog(req.headers);
  next();
});

//add users to the request itself
app.use((req, res, next) => {
  req.users = users;
  next();
});

//authenticate
function authenticate(req, res, next) {
  const indexOfUser = utils.findArrayIndexOfUserByEmail(
    req.headers.email,
    req.users
  );

  //if user not found quit early
  if (indexOfUser === -1) {
    res.send({ status: 1, error: "Use not found" });
  }

  //check if the token belongs to the current user
  if (req.headers.token === req.users[indexOfUser].token) {
    next();
  } else {
    res.send({ status: 0, error: "Invalid token!" });
  }
}

//create some routes
app.use("/add", require("./routes/add"));
app.use("/get", authenticate, require("./routes/get"));
app.use("/delete", authenticate, require("./routes/delete"));
app.use("/modify", authenticate, require("./routes/modify"));
app.use("/login", require("./routes/login"));
app.use("/logout", authenticate, require("./routes/logout"));

//start the server
const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log("Server started!");
});
