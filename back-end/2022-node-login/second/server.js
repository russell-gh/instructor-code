//imports
const express = require("express"); // here we grab express
const app = express(); // initialise express
const cors = require("cors"); // grab cors - browser security
const bodyParser = require("body-parser"); // grab bodyParser, this turns our request body into json
const utils = require("./routes/utils.js");
const asyncMySQL = require("./mysql/connection.js");

// mysql.query(`SELECT * FROM users;`, (error, results) => {
//   console.log(error, results);
// });

// middleware
app.use(cors()); // first stage of middleware - cors intercepts the requests we make to the server, this turns of the security within the headers
app.use(bodyParser.json()); // second stage of middleware - automatically turns the request to the server into json

//listen for the server accessible
app.use((req, res, next) => {
  // app.use takes a function, with the 'request, response and next' as its params
  // console.log("A request arrived: ", req.headers, req.body);
  // everytime a make request, we will be able to detect what is arriving
  utils.addToLog(req.headers);
  next();
});

// in order to send data further down the hierarchy we attach the users object to the request itself this is similar to how props works to create a sideways relationship.
app.use((req, res, next) => {
  req.asyncMySQL = asyncMySQL;
  // middleware is used to attach the data to the request, this passes the data down to the next layer of the onion
  next();
});

//authenticate
function authenticate(req, res, next) {
  // to check if the user exists, we first pull in the function used to find the index of the user
  const indexOfUser = utils.findArrayIndexOfUserByEmail(
    req.headers.email, // here we are finding the user based on the email sent in the header
    req.users
  );

  // if the user is not found in the array object, then we quit early
  if (indexOfUser === -1) {
    res.send({ status: 1, error: "Use not found" });
  }

  // only if the token in the header matches the token given to the user, then do we proceed to the next layer onion layer
  if (req.headers.token === req.users[indexOfUser].token) {
    next();
  } else {
    res.send({ status: 0, error: "Invalid token!" });
  }
}

// create some routes that handle the inbound request

// the requests that require modification, deletion, and logout require the authentication middleware because we need to know they are, who they are
// this is done by checking if the token matches, the token provided to the user on login

// if all routes had the auth middleware, we would never be able to login as it would require a token to proceed

app.use("/add", require("./routes/add")); // add user route url - when /add runs it has access to the data within our requests
app.use("/get", authenticate, require("./routes/get")); // get all users route url
app.use("/delete", authenticate, require("./routes/delete")); // delete user route url
app.use("/modify", authenticate, require("./routes/modify")); // modify user route url
app.use("/login", require("./routes/login")); // login user route url
app.use("/logout", authenticate, require("./routes/logout")); // logout user route url

//start the server
const port = process.env.PORT || 6001; // if there is a port, use that port, else use the port we have set
app.listen(port, () => {
  console.log("Server started!"); // visual check for us to see the server is live
});
