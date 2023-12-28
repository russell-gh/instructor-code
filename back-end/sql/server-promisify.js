const mysql = require("mysql");

const connection = {};
connection.mysql = mysql.createConnection({
  database: "libertyb_cohort6",
  user: "libertyb_cohort6",
  password: "cohort62021",
  host: "91.238.160.172",
  port: 3306,
});
connection.mysql.connect();

const query = `SELECT * FROM customers`;

// connection.mysql.query(query, (err, results) => {
//   console.log(results, err);
// });

function makeAsync(query) {
  return new Promise(function (resolve, reject) {
    connection.mysql.query(query, (err, results) => {
      if (err) reject();
      //else resolve
      resolve(results);
    });
  });
}

makeAsync(query).then((result) => {
  //console.log(result);
});

async function getData() {
  const result = await makeAsync(query);
  console.log(result);
}

getData();
