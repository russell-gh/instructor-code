const express = require("express");
const app = express.Router();
const utils = require("./utils.js");

app.delete("/", (req, res) => {
  //find the user in the array
  const indexOfUser = utils.findArrayIndexOfUserByEmail(
    req.headers.email,
    req.users
  );

  console.log(indexOfUser);

  if (indexOfUser > -1) {
    //deleted the token
    delete req.users[indexOfUser].token;

    res.send({ status: 1 });
  } else {
    res.send({ status: 0, error: "Sorry, that are not logged in!" });
  }
});

module.exports = app;
