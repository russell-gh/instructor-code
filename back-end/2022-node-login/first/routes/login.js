const express = require("express");
const app = express.Router();
const utils = require("./utils.js");

app.post("/", (req, res) => {
  const indexOfUser = utils.findArrayIndexOfUserByEmail(
    req.body.email,
    req.users
  );

  if (indexOfUser === -1) {
    res.send({ status: 0, error: "Sorry, user not found" });
    return;
  }

  if (
    req.body.email === req.users[indexOfUser].email &&
    req.body.password === req.users[indexOfUser].password
  ) {
    //your user name and password match
    const token = utils.getUniqueId();
    req.users[indexOfUser].token = token;
    res.send({ status: 1, token });
  } else {
    res.send({
      status: 0,
      error: "Sorry, you supplied the wrong email or password or both",
    });
  }
});

module.exports = app;
