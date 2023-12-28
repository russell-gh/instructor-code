const express = require("express");
const app = express.Router();
// const utils = require("./utils.js");
// const sqlQueries = require("../mysql/queries");
const mongoose = require("mongoose");
const userSchema = require("../mongoSchemas/userSchema");

app.delete("/:email", async (req, res) => {
  const User = mongoose.model("User", userSchema);

  User.remove({ email: req.params.email }, (err, item) => {
    if (item.deletedCount > 0) {
      res.send({ status: 1 });
    } else {
      res.send({ status: 0, error: "Sorry, that email does not exist!" });
    }
  });
});

module.exports = app;
