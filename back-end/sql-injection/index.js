const express = require("express");
const { connect } = require("http2");
const app = express();
const mysql = require("mysql");
const sha256 = require("sha256");
require("dotenv").config();
const chalk = require("chalk");

app.use(express.json());

const connection = {};
connection.mysql = mysql.createConnection({
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
});
connection.mysql.connect();

const auth = (request, response, next) => {
  //check if token is valid

  //if valid
  next();
};

app.post("/signup", (request, response) => {
  const hashedPassword = sha256(request.body.password + "+russellsapp");

  const query = `INSERT INTO users (email, hashedPassword) 
                    VALUES ("${request.body.email}", 
                            "${hashedPassword}")`;

  connection.mysql.query(query, (error, results) => {
    console.log(error, results);
  });
});

app.post("/login", (request, response) => {
  const hashedPassword = sha256(request.body.password + "+russellsapp");

  console.log(
    chalk.cyan(
      `The email was ${request.body.email}, the password was ${request.body.password}`
    )
  );

  const query = `SELECT id, count(*) as count FROM users
                    WHERE email LIKE "${request.body.email}"
                        AND hashedPassword LIKE "${hashedPassword}"`;

  // const query = `SELECT id, count(*) as count FROM users
  //                       WHERE email LIKE ?
  //                           AND hashedPassword LIKE ?`;

  const values = [request.body.email, request.body.password];

  console.log(chalk.magenta(`The SQL query was ${query}`));

  connection.mysql.query(query, values, (error, results) => {
    console.log(
      chalk.bgGreen(`Results from database:`, JSON.stringify(results))
    );

    if (results[0].count > 0) {
      console.log(chalk.green(`User found in database, sending token!!!`));

      //send a token
      const token = Math.random() * 100000000000000000;

      const query = `INSERT INTO tokens (id, token) VALUES (${results[0].id}, "${token}")`;
      connection.mysql.query(query, (error, request) => {});

      response.json({ token });
    } else {
      console.log(chalk.inverse(`User NOT found in database!!!`));

      response.send("WRONG PASSWORD!");
    }
  });
});

app.get("/password_reset/:email", (request, response) => {
  console.log("User requested password reset!", request.params.email);

  //resertthe users password in the database
  const newPassword = Math.floor(Math.random() * 10000000000);
  const hashedPassword = sha256(newPassword + "+russellsapp");

  const query = `UPDATE users SET hashedPassword = "${hashedPassword}"
                  WHERE email = "${request.params.email}"`;

  connection.mysql.query(query, (error, results) => {
    console.log(error, results, newPassword);
    //uncomment below if you create a send in blue account
    //sendEmail(request.params.email, newPassword);
    response.json({ ok: 1 });
  });
});

app.get("/private", auth, (request, response) => {
  console.log("Sending private data...");
  response.send("Here is private data");
});

const nodePort = process.env.NODE_PORT || 6001;
app.listen(nodePort, () => {
  console.log("The server is running on port: " + nodePort);
});
