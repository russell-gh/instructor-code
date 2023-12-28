const express = require("express");
const app = express.Router();
// const utils = require("./utils.js");
// const sqlQueries = require("../mysql/queries");
const mongoose = require("mongoose");
const userSchema = require("../mongoSchemas/userSchema");

app.get("/:email", async (req, res) => {
  const User = mongoose.model("User", userSchema);

  User.find({ email: req.params.email }, (err, items) => {
    if (items.length) {
      res.send({ status: 1, payload: items });
    } else {
      res.send({ status: 0, error: "User does not exist!" });
    }
  });

  // const { email } = req.params;
  // const results = await req.asyncMySQL(
  //   sqlQueries.selectUserProfile(email, req.user_id)
  // );
});

module.exports = app;
