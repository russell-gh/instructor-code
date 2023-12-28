const express = require("express");
const app = express.Router();
const utils = require("./utils.js");
const sqlQueries = require("../mysql/queries");
const sha256 = require("sha256");

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = sha256(process.env.PASSWORD_SALT + password);

  const results = await req.asyncMySQL(
    sqlQueries.selectUserIdFromEmailPassword(email, hashedPassword)
  );

  if (results.length === 0) {
    res.send({ status: 0, error: "Wrong logins!" });
  } else {
    const token = utils.getUniqueId(64);

    await req.asyncMySQL(sqlQueries.insertNewToken(results[0].user_id, token));

    res.send({ status: 1, token });
  }
});

module.exports = app;
