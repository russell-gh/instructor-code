const express = require("express");
const app = express.Router(); // we do not require all of express, we already have it from server.js. Here we only require the Router part of express
const utils = require("./utils.js");
const sqlQueries = require("../mysql/queries");
const sha256 = require("sha256");

app.post("/", async (req, res) => {
  const { email } = req.body;

  const results = await req.asyncMySQL(sqlQueries.selectUserCount(email));

  const { count } = results[0];

  if (count) {
    res.send({ status: 0, error: "Sorry, that email already exists!" });
  } else {
    const result = await req.asyncMySQL(
      sqlQueries.insertUser(req.body.email, req.body.user_name)
    );

    //hashed version
    const hashedPassword = sha256(
      process.env.PASSWORD_SALT + req.body.password
    );

    await req.asyncMySQL(
      sqlQueries.insertUserPassword(result.insertId, hashedPassword)
    );

    res.send({ status: 1 });
  }
});

module.exports = app;
