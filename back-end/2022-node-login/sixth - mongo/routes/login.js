const express = require("express");
const app = express.Router();
const utils = require("./utils.js");
const sqlQueries = require("../mysql/queries");
const sha256 = require("sha256");
const mongoose = require("mongoose");
const userSchema = require("../mongoSchemas/userSchema");

app.post("/", async (req, res) => {
  if (!req.body.email || !req.body.password)
    res.send({ status: 0, error: "Missing some data!" });

  const User = mongoose.model("User", userSchema);

  req.body.password = sha256(process.env.PASSWORD_SALT + req.body.password);

  const token = utils.getUniqueId(64);

  User.findOneAndUpdate({ ...req.body }, { token }, (err, items) => {
    if (items) {
      res.send({ status: 1, token: items.token });
    } else {
      res.send({ status: 0, error: "Sorry, wrong creds!" });
    }
  });
});

module.exports = app;
