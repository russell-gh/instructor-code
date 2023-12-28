const mysql = require("mysql");

const connection = {};
connection.mysql = mysql.createConnection({
  // database: "libertyb_cohort6",
  // user: "libertyb_cohort6",
  // password: "cohort62021",
  // host: "91.238.160.172",
  // port: 3306,
  database: "amycodes_timbertours",
  user: "amycodes_travel",
  password: "T1mb3rBUSH!",
  host: "91.238.164.173",
  port: 3306,
});
connection.mysql.connect();

const query = `SELECT * FROM customers`;

connection.mysql.query(query, (err, results) => {
  console.log(results, err);
});
