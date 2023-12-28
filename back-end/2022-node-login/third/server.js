const express = require("express"); // here we grab express
const app = express(); // initialise express
const cors = require("cors"); // grab cors - browser security
const bodyParser = require("body-parser"); // grab bodyParser, this turns our request body into json
const utils = require("./routes/utils.js");
const asyncMySQL = require("./mysql/connection.js");
const sqlQueries = require("./mysql/queries");

app.use(cors()); // first stage of middleware - cors intercepts the requests we make to the server, this turns of the security within the headers
app.use(bodyParser.json()); // second stage of middleware - automatically turns the request to the server into json

app.use((req, res, next) => {
  utils.addToLog(req.headers);
  next();
});

app.use((req, res, next) => {
  req.asyncMySQL = asyncMySQL;
  next();
});

async function authenticate(req, res, next) {
  const { token } = req.headers;

  const results = await asyncMySQL(sqlQueries.selectIdFromToken(token));

  if (results.length === 0) {
    res.send({ status: 0, error: "Wrong token!!!!" });
  } else {
    req.user_id = results[0].user_id;
    next();
  }
}

app.use("/add", require("./routes/add")); // add user route url - when /add runs it has access to the data within our requests
app.use("/get", authenticate, require("./routes/get")); // get all users route url
app.use("/delete", authenticate, require("./routes/delete")); // delete user route url
app.use("/modify", authenticate, require("./routes/modify")); // modify user route url
app.use("/login", require("./routes/login")); // login user route url
app.use("/logout", authenticate, require("./routes/logout")); // logout user route url

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log("Server started!");
});
