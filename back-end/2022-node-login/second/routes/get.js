// with a get request, we are asking for the contents of that url
// when we ask for all of the users, we send all of the users in order to view them
// initially, this will be an empty array

const express = require("express");
const app = express.Router();
const utils = require("./utils.js");

app.get("/", (req, res) => {
  const indexOfUser = utils.findArrayIndexOfUserByEmail(
    req.headers.email,
    req.users
    // as we have attached the data to the request in server.js, we have the ability to view all of the users.
  );

  res.send(req.users[indexOfUser]);
});

module.exports = app;
