const express = require("express");
const app = express.Router();
const utils = require("./utils.js");
const sqlQueries = require("../mysql/queries");

app.delete("/:email", async (req, res) => {
  await req.asyncMySQL(sqlQueries.deleteAllTokens(req.params.email));

  res.send({ status: 1 });
});

module.exports = app;
