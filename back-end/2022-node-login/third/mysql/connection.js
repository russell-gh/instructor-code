const mysql = require("mysql");

const connection = mysql.createConnection({
  database: "cohort-8",
  user: "root",
  password: "root",
  host: "localhost",
  port: 3306,
});

connection.connect();

// const insertSQL = `DELETE FROM users WHERE id > 0;`;

// connection.query(insertSQL, (error, results) => {
//   console.log(error, results);
// });

function asyncMySQL(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }

      resolve(results);
    });
  });
}

module.exports = asyncMySQL;
