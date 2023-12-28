const express = require("express");
const router = express.Router();
const sha256 = require("sha256");
const connection = require("../database/connection");
const checkToken = require("../middleware/checkToken");
const nodemailer = require("./nodemailer");
const url = require("url");
const welcomeEmail = require("../emailTemplates/welcomeEmail");
const forgotPassword = require("../emailTemplates/forgotPassword");
const connectionPromisified = require("../database/connection-promisified");

// INITIALISES A NEW ADMIN USER ACCOUNT
router.post("/signup", (request, response) => {
  if (request.body.email && request.body.password) {
    let saltyHashedPassword = sha256(request.body.password + process.env.SALT);

    const query = `INSERT IGNORE users_admin (email, password) 
                 VALUES( ?, ?)`;

    let params = [request.body.email, saltyHashedPassword];
    connection.mysql.query(query, params, function (err, results) {
      if (results.insertId > 0 && results.affectedRows > 0) {
        response.send({ statusCode: 1, type: 0 });
        nodemailer
          .send(request.body.email, welcomeEmail(request.body.email))
          .catch(console.error);
      } else {
        response.send({ satusCode: 2, type: 50 });
      }
    });
  } else {
    response.send({ statusCode: 2, type: 250 });
  }
});

// SENDS AN ACTIVATION EMAIL VIA SMTP
router.get("/activation", (request, response) => {
  const queryObject = url.parse(request.url, true).query;
  if (queryObject.email) {
    const query = `UPDATE users_admin 
                          SET activated_account = 1
                          WHERE email = ? 
                          LIMIT 1`;

    connection.mysql.query(query, queryObject.email, function (err, results) {
      if (results.affectedRows > 0) {
        response.send(
          `<h2>


            Thank you for activating your account, you are now ready to get
            started!
          </h2>`
        );
      } else {
        response.send({ statusCode: 2, type: 350 });
      }
    });
  }
});

// DELETES AN ADMIN USER AND ALL OF THEIR ASSOCIATED SERVICE USERS
router.delete("/delete", checkToken, (request, response) => {
  if (request.admin_user_id) {
    const query = `DELETE FROM users_admin WHERE id LIKE ?;`;
    const query1 = `DELETE FROM users_service WHERE admin_id LIKE ?`;
    connection.mysql.query(query, request.admin_user_id, function (
      err,
      results
    ) {
      if (results.affectedRows > 0) {
        connection.mysql.query(query1, function (err, results) {
          if (results.affectedRows > 0) {
            response.send({ statusCode: 1, type: 0 });
          } else {
            response.send({ statusCode: 2, type: 300 });
          }
        });
      } else {
        response.send({ statusCode: 2, type: 300 });
      }
    });
  } else {
    response.send({ statusCode: 2, type: 250 });
  }
});

// CHANGES THE ADMIN USER PASSWORD OR EMAIL
router.post("/update", checkToken, async (request, response) => {
  if (request.body.password || request.body.email) {
    let saltyHashedPassword = sha256(request.body.password + process.env.SALT);
    try {
      if (request.body.password) {
        const query = `UPDATE users_admin 
                      SET password = :val1
                       WHERE id LIKE :val2`;

        const { results } = await connectionPromisified.mysql.query({
          sql: query,
          params: {
            val1: saltyHashedPassword,
            val2: request.admin_user_id,
          },
        });
      }

      if (request.body.email) {
        const query = `UPDATE users_admin 
                      SET email = :val1
                       WHERE id LIKE :val2`;
        const { results } = await connectionPromisified.mysql.query({
          sql: query,
          params: {
            val1: request.body.email,
            val2: request.admin_user_id,
          },
        });
      }
    } catch (err) {
      response.send({ statusCode: 2, type: 500 });
    }
    response.send({ statusCode: 1, type: 0 });
  } else {
    response.send({ statusCode: 2, type: 250 });
  }
});

// CREATES A RANDOMLY GENERATED TEMPORARY PASSWORD AND SENDS IT TO THE ADMIN USER
router.post("/password-reset", (request, response) => {
  if (request.body.email) {
    let randomNumber = Math.round(Math.random() * 100000000);
    let saltyHashedPassword = sha256(randomNumber + process.env.SALT);
    // this sends the new salted random password to the database
    const query = `UPDATE users_admin SET password = ?
                          WHERE email LIKE ?`;

    let params = [saltyHashedPassword, request.body.email];
    connection.mysql.query(query, params, function (err, results) {
      if (results.affectedRows > 0) {
        response.send({ statusCode: 1, type: 0 });
        nodemailer
          .send(request.body.email, forgotPassword(randomNumber))
          .catch(console.error);
      } else {
        response.send({ statusCode: 2, type: 350 });
      }
    });
  } else {
    response.send({ statusCode: 2, type: 250 });
  }
});

module.exports = router;
