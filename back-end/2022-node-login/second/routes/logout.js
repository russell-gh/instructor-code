const express = require("express");
const app = express.Router();
const utils = require("./utils.js");

app.delete("/", (req, res) => {
  // consistent pattern - we always need to find the user in the array using the findArrIdx func
  const indexOfUser = utils.findArrayIndexOfUserByEmail(
    req.headers.email, // email is placed in the headers
    req.users
  );

  console.log(indexOfUser);

  if (indexOfUser > -1) {
    delete req.users[indexOfUser].token;
    // delete removes a prop from an obj, here we are deleting the token of the specific user

    res.send({ status: 1 });
  } else {
    res.send({ status: 0, error: "Sorry, that are not logged in!" });
  }
});

module.exports = app;
