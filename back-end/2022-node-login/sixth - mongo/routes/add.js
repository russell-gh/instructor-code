const express = require("express");
const app = express.Router(); // we do not require all of express, we already have it from server.js. Here we only require the Router part of express
const utils = require("./utils.js");
const sqlQueries = require("../mysql/queries");
const sha256 = require("sha256");
const mongoose = require("mongoose");
const userSchema = require("../mongoSchemas/userSchema");

app.post("/", async (req, res) => {
  const User = mongoose.model("User", userSchema);

  req.body.password = sha256(process.env.PASSWORD_SALT + req.body.password);

  req.body.token = "";

  const user = new User({ ...req.body, token: "" });

  user.save((err, item) => {
    console.log(err, item);
    if (item._id) {
      res.send({ status: 1 });
    } else {
      res.send({ status: 0, error: "Something went wrong" });
    }
  });
});

module.exports = app;
