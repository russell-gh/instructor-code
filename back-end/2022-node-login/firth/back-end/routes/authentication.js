const express = require("express");
const router = express.Router();
const connection = require("../database/connection");
const sha256 = require("sha256");
const checkToken = require("../middleware/checkToken");
const connectionPromisified = require("../database/connection-promisified");
const axios = require("axios");

// LOGS IN THE ADMIN USER
router.post("/login", (request, response) => {
  if (request.body.password && request.body.email) {
    let saltyHashedPassword = sha256(request.body.password + process.env.SALT);

    const query = `SELECT COUNT(*) AS count, id FROM users_admin
                   WHERE email LIKE ?
                   AND password LIKE ?`;
    let params = [request.body.email, saltyHashedPassword];

    connection.mysql.query(query, params, function (err, results) {
      if (results[0].count === 1) {
        let token =
          Math.round(Math.random() * 10000000000000000) + "" + Date.now();
        const insertToken = `INSERT INTO sessions (
                              admin_user_id,
                              token) 
                              VALUES ("${results[0].id}",
                                      "${token}")`;

        connection.mysql.query(insertToken, function (err, results) {
          response.send({ statusCode: 1, type: 0, token });
        });
      } else {
        response.send({ statusCode: 2, type: 400 });
      }
    });
  } else {
    response.send({ statusCode: 2, type: 250 });
  }
});

// LOGS OUT THE ADMIN USER
router.post("/logout", checkToken, (request, response) => {
  if (request.body.token && request.body.admin_user_id) {
    const query = `DELETE FROM sessions WHERE 
                      admin_user_id = ? 
                      AND token = ?`;
    let params = [request.body.admin_user_id, request.body.token];
    connection.mysql.query(query, params, function (err, results) {
      response.send({ statusCode: 1, type: 0 });
    });
  }
});

// LOGS IN THE SERVICE USER USING THE ACCESS CODE
router.post("/service", async (request, response) => {
  console.log(request.body);
  if (request.body.access_code) {
    const query = `SELECT COUNT(*) AS count, id 
                      FROM users_service
                      WHERE access_code = :access_code;`;

    const { results } = await connectionPromisified.mysql.query({
      sql: query,
      params: { access_code: request.body.access_code },
    });

    if (results[0].count == 1) {
      response.send({ statusCode: 1, type: 0 });

      const query = `INSERT INTO devices
        SET device_id = :device_id,
        users_service_id = :users_service_id,
        push_token = :token`;

      let params = {
        device_id: request.body.device_id,
        users_service_id: results[0].id,
        token: request.body.token,
      };

      const { results2 } = await connectionPromisified.mysql.query({
        sql: query,
        params,
      });

      const oneSignalResponse = await axios.post('https://onesignal.com/api/v1/players', {
          app_id: "bc5644ee-9415-4a4f-bbbe-aa2dd0b6b2b7",
          identifier: params.token,
          language: "en",
          timezone: 0,
          game_version: "1.0",
          device_os: "7.0.4",
          device_type: 1,
          device_model: "Emulator"
      });
      console.log(oneSignalResponse);
      
    } else {
      response.send({ statusCode: 2, type: 450 });
    }
  }
});

module.exports = router;
