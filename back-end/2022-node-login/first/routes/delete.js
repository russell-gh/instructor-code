const express = require("express");
const app = express.Router();
const utils = require("./utils.js");

app.delete("/:email", (req, res) => {
  //find the user in the array
  const indexOfUser = utils.findArrayIndexOfUserByEmail(
    req.params.email,
    req.users
  );

  if (indexOfUser > -1) {
    //splice the user
    req.users.splice(indexOfUser, 1);
    res.send({ status: 1 });
  } else {
    res.send({ status: 0, error: "Sorry, that email does not exist!" });
  }
});

module.exports = app;
