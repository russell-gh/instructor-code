const express = require("express");
const app = express.Router();
const utils = require("./utils.js");

app.patch("/:email", (req, res) => {
  //find the user in the array
  const indexOfUser = utils.findArrayIndexOfUserByEmail(
    req.params.email,
    req.users
  );

  if (indexOfUser > -1) {
    if (req.body.password) req.users[indexOfUser].password = req.body.password;
    if (req.body.name) req.users[indexOfUser].name = req.body.name;

    res.send({ status: 1 });
  } else {
    res.send({ status: 0, error: "Sorry, that email does not exist!" });
  }
});

module.exports = app;
