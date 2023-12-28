const express = require("express");
const app = express.Router();
const utils = require("./utils.js");
const sqlQueries = require("../mysql/queries");
const mongoose = require("mongoose");
const userSchema = require("../mongoSchemas/userSchema");

app.patch("/:email", async (req, res) => {
  const User = mongoose.model("User", userSchema);

  User.findOneAndUpdate(
    { email: req.params.email },
    { ...req.body },
    (err, items) => {
      if (items) {
        res.send({ status: 1 });
      } else {
        res.send({ status: 0, error: "Sorry, something went wrong!" });
      }
    }
  );

  // const { user_name, email } = req.body;

  // const result = await req.asyncMySQL(
  //   sqlQueries.updateUserViaEmail(req.user_id, email, {
  //     user_name,
  //   })
  // );
});

module.exports = app;
