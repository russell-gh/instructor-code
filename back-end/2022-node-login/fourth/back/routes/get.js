const express = require("express");
const app = express.Router();
const utils = require("./utils.js");
const sqlQueries = require("../mysql/queries");

app.get("/:email", async (req, res) => {
  const { email } = req.params;

  const results = await req.asyncMySQL(
    sqlQueries.selectUserProfile(email, req.user_id)
  );

  if (results.length) {
    res.send({ status: 1, payload: results[0] });
  } else {
    res.send({ status: 0, error: "User does not exist!" });
  }
});

module.exports = app;
