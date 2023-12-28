const express = require("express");
const app = express.Router();
const utils = require("./utils.js");
const sqlQueries = require("../mysql/queries");

app.delete("/:email", async (req, res) => {
  console.log(req.headers, req.params);
  const { email } = req.params;

  console.log(sqlQueries.deleteUserViaEmail(req.user_id, email));

  const result = await req.asyncMySQL(
    sqlQueries.deleteUserViaEmail(req.user_id, email)
  );

  if (result.affectedRows === 1) {
    res.send({ status: 1 });
  } else {
    res.send({ status: 0, error: "Sorry, that email does not exist!" });
  }
});

module.exports = app;
