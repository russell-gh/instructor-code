const connection = require("../database/connection");

// check token middleware
const checkToken = (request, response, next) => {
  if (request.headers.token) {
    let query = `SELECT admin_user_id FROM sessions
                  WHERE token LIKE ?`;

    connection.mysql.query(query, request.headers.token, function (
      err,
      results
    ) {
      if (results.length === 1) {
        //append the user id to the request
        request.admin_user_id = results[0].admin_user_id;
        next();
      } else {
        response.send("You can't sit with us!");
        console.log("You can't sit with us!"); //DO NOT REMOVE THIS CONSOLE LOG
      }
    });
  } else {
    response.send("You can't sit with us!");
  }
};

module.exports = checkToken;
