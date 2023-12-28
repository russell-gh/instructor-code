const express = require("express");
const app = express.Router();
const utils = require("./utils.js");

// this route needs to know which specific user we want to delete
app.delete("/:email", (req, res) => {
  // here we are deleting a user via the email route
  // to find the specifc index of a user we use the findIndex array method, it returns the position of the user in the array
  const indexOfUser = utils.findArrayIndexOfUserByEmail(
    req.params.email, // req.params.email is sent into the email param
    req.users // finally, req.users is sent into the users param
  );

  if (indexOfUser > -1) {
    // if the index of the user is truthy, splice that specific user
    // once we have found the users position, we then splice it out of the array
    // once that user has been deleted, send a positive status update to the front-end.
    // else, send an error message back to the front-end
    req.users.splice(indexOfUser, 1);
    res.send({ status: 1 });
  } else {
    res.send({ status: 0, error: "Sorry, that email does not exist!" });
  }
});

module.exports = app;
