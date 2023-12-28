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

  // if the index of the user is falsey, we return early
  // token-based authentication conditional statement
  if (
    req.body.email === req.users[indexOfUser].email &&
    req.body.password === req.users[indexOfUser].password
    // if the request body of the email and password, matches both specified within the users object
    // then that person is the one that created an account, we then create a token based of the uniqueId func, and attach it to them
  ) {
    const token = utils.getUniqueId();
    req.users[indexOfUser].token = token;
    res.send({ status: 1, token }); // then send a positive response object to the front end
  } else {
    res.send({
      status: 0,
      error: "Sorry, you supplied the wrong email or password or both",
    });
  }
});

module.exports = app;
