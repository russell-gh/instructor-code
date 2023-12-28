const express = require("express");
const app = express.Router();
const utils = require("./utils.js");
const sqlQueries = require("../mysql/queries");

app.patch("/:email", async (req, res) => {
  const { user_name, email } = req.body;

  const result = await req.asyncMySQL(
    sqlQueries.updateUserViaEmail(req.user_id, email, {
      user_name,
    })
  );

  if (result.affectedRows === 1) {
    res.send({ status: 1 });
  } else {
    res.send({ status: 0, error: "Sorry, that email does not exist!" });
  }
});

module.exports = app;
