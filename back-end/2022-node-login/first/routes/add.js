const express = require("express");
const app = express.Router();
const utils = require("./utils.js");

app.post("/", (req, res) => {
  const indexOfUser = utils.findArrayIndexOfUserByEmail(
    req.body.email,
    req.users
  );

  if (indexOfUser === -1) {
    const uniqueId = utils.getUniqueId();
    req.users.push({ ...req.body, uniqueId });
    res.send({ status: 1 });
  } else {
    res.send({ status: 0, error: "Sorry, that email already exists!" });
  }
});

module.exports = app;
