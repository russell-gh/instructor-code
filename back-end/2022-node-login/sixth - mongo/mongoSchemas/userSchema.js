const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: String,
  email: String,
  password: String,
  token: String,
});

module.exports = userSchema;
