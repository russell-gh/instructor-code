const { MySQL } = require("mysql-promisify");
const data = {};

data.mysql = new MySQL({
  database: process.env.DATABASE,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 3306,
});

module.exports = data;
