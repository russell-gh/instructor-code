const express = require("express");
const app = express.Router();
const utils = require("./utils.js");

app.get("/", (req, res) => {
  const indexOfUser = utils.findArrayIndexOfUserByEmail(
    req.headers.email,
    req.users
  );

  res.send(req.users[indexOfUser]);
});

module.exports = app;
