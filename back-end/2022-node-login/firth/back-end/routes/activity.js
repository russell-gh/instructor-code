const express = require("express");
const router = express.Router();
const connection = require("../database/connection");
const checkToken = require("../middleware/checkToken");
const connectionPromisified = require("../database/connection-promisified");
const userExceededChallengeThreshold = require("../emailTemplates/userExceededChallengeThreshold");
const nodemailer = require("./nodemailer");

// RETRIEVES ALL THE USER ACTIVITY
router.post("/retrieve", checkToken, (request, response) => {
  // defunct validation but check everything twice and trust noone.
  if (request.body.user_service_id) {
    const query = `SELECT *
                    FROM activity
                    WHERE activity.user_service_id LIKE ?
                    ORDER BY activity.entry_date DESC LIMIT 100`;
    connection.mysql.query(query, request.body.user_service_id, function (
      err,
      results
    ) {
      response.send({ statusCode: 1, type: 0, history: results });
    });
  }
});

// SENDS A FRESHLY BAKED ACTIVITY ENTRY TO THE DATABASE
router.post("/store", async (request, response) => {
  //looks up the service user based on their access code

  const query = `SELECT users_service.id, 
                        users_service.name, 
                        users_admin.email, 
                        users_service.challenge_attempt_threshold 
                  FROM users_service
                  JOIN users_admin 
                   ON users_service.admin_id = users_admin.id
                   WHERE access_code LIKE :accessCode;`;
  const params = {
    accessCode: request.headers.access_code,
  };

  const { results } = await connectionPromisified.mysql.query({
    sql: query,
    params,
  });

  // if the system finds a service user that matches that access code...
  //...insert the activity that we have for them
  if (
    results.length === 1 &&
    results[0].id &&
    request.body.challenge_notify_time &&
    request.body.challenge_start_time &&
    request.body.challenge_success_time &&
    request.body.challenge_attempts >= 0
  ) {
    const query2 = `INSERT activity (user_service_id,
                                      challenge_notify_time,
                                      challenge_start_time, 
                                      challenge_success_time, 
                                      challenge_attempts) 
                      VALUES(:userServiceId,
                             :challengeNotifyTime,
                             :challengeStartTime,
                             :challengeSuccessTime,
                             :challengeAttempts)`;

    const params2 = {
      userServiceId: results[0].id,
      challengeNotifyTime: request.body.challenge_notify_time,
      challengeStartTime: request.body.challenge_start_time,
      challengeSuccessTime: request.body.challenge_success_time,
      challengeAttempts: request.body.challenge_attempts,
    };

    const results2 = await connectionPromisified.mysql.query({
      sql: query2,
      params: params2,
    });

    // send messages to the user saying everything is going ok...
    response.send({ statusCode: 1, type: 0 });

    // calls the puzzle calculator and awaits the next due date
    let puzzle = await puzzleCalculator(request.headers.access_code);
    // update the puzzles table with the puzzle due date and overdue date
    const query3 = `UPDATE puzzles 
                    SET notify_time = FROM_UNIXTIME(:puzzleChallenge),
                    overdue_time = FROM_UNIXTIME(:puzzleChallengeOverdue),
                    notify_time_sent = 0,
                    overdue_time_sent = 0
                    WHERE user_service_id = :id;`;

    let params3 = {
      puzzleChallenge: Math.round(puzzle.challenge / 1000),
      puzzleChallengeOverdue: Math.round(puzzle.challengeOverdue / 1000),
      id: results[0].id,
    };

    await connectionPromisified.mysql.query({
      sql: query3,
      params: params3,
    });
  } else {
    response.send({ statusCode: 2, type: 250 });
  }

  //if user took as many times as the attempt threshold, message admin
  if (
    request.body.challenge_attempts >= results[0].challenge_attempt_threshold
  ) {
    nodemailer
      .send(
        results[0].email,
        userExceededChallengeThreshold(
          results[0].challenge_attempt_threshold,
          results[0].name
        )
      )
      .catch(console.error);
    console.log("an email was sent to the admin");
  }
});

module.exports = router;
