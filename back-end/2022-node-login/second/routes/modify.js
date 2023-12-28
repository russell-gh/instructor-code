const express = require("express");
const app = express.Router();
const utils = require("./utils.js");

// the purpose of the patch route is to partially update the users details
// in order to do this, this request requires a body to modify certain details
// via the email param, we can modify the users password or name
// N.B - POST and PUT can also be used as they both have a body and can do the exact same thing
app.patch("/:email", (req, res) => {
  // again the function finds the index of the user, and returns the index of the user
  const indexOfUser = utils.findArrayIndexOfUserByEmail(
    req.params.email,
    req.users
  );

  if (indexOfUser > -1) {
    // if both the index of the user and the password within the data is truthy, set the new password via the body of the request
    if (req.body.password) req.users[indexOfUser].password = req.body.password; // <- update the user at the given index

    // if the name within the data is truthy, update the index of the users name, to the name we specify within the body of the request
    if (req.body.name) req.users[indexOfUser].name = req.body.name;
    // these have to be seperate conditionals, because we do not want it to update parts of the data, unless we have that specific the data

    // send a postive / negative status object back to the front-end
    res.send({ status: 1 });
  } else {
    res.send({ status: 0, error: "Sorry, that email does not exist!" });
  }
});

module.exports = app;
