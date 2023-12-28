// listen for an add request

const express = require("express");
const app = express.Router(); // we do not require all of express, we already have it from server.js. Here we only require the Router part of express
const utils = require("./utils.js");
const sqlQueries = require("../mysql/queries");

app.post("/", async (req, res) => {
  //connect to mysql and check if exists

  const results = await req.asyncMySQL(
    sqlQueries.selectUserCount(req.body.email)
  );

  console.log(results);

  const { count } = results[0];

  if (count) {
    res.send({ status: 0, error: "Sorry, that email already exists!" });
  } else {
    await req.asyncMySQL(
      sqlQueries.insertUser(req.body.email, req.body.user_name)
    );
    res.send({ status: 1 });
  }
});

module.exports = app;
