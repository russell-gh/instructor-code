module.exports = {
  selectUserCount: function (email) {
    return `SELECT count(*) as count
                    FROM users
                      WHERE email LIKE '${email}'`;
  },

  insertUser: function (email, user_name) {
    return `INSERT INTO users (email, user_name)
                VALUES ('${email}', '${user_name}'); `;
  },

  insertUserPassword: function (user_id, password) {
    return `INSERT INTO logins (user_id, hashed_password)
              VALUES ('${user_id}', '${password}');`;
  },

  deleteUserViaEmail: function (user_id, email) {
    // return `DELETE FROM users
    //           WHERE email LIKE '${email}'
    //             AND id = '${user_id}'
    //               LIMIT 1;`;

    return `DELETE users, logins 
              FROM users 
                JOIN logins ON users.id = logins.user_id
                    WHERE email LIKE '${email}'
                       AND user_id = '${user_id}';`;
  },

  updateUserViaEmail: function (user_id, email, payload) {
    return `UPDATE users
                SET user_name = '${payload.user_name}'
                  WHERE email LIKE '${email}'
                    AND id = '${user_id}'
                     LIMIT 1`;
  },

  selectUserProfile: function (email, user_id) {
    return `SELECT email, user_name, hashed_password, age, 
                entry_date AS user_added_date, 
                last_updated_date AS last_password_changed
                    FROM users
                        JOIN logins
                            ON users.id = logins.user_id
                                WHERE email LIKE '${email}'
                                  AND user_id = '${user_id}'
                                    LIMIT 1;`;
  },

  selectUserIdFromEmailPassword: function (email, password) {
    return `SELECT user_id
                    FROM users
                        JOIN logins
                            ON users.id = logins.user_id
                                WHERE email LIKE '${email}'
                                  AND hashed_password LIKE '${password}'
                                    LIMIT 1;`;
  },

  insertNewToken: function (user_id, token) {
    return `INSERT INTO tokens 
                (user_id, token)
                  VALUES ('${user_id}', '${token}');`;
  },

  deleteAllTokens: function (email, user_id) {
    return `DELETE tokens FROM tokens
              JOIN users
                ON tokens.user_id = users.id
                   WHERE email = '${email}'
                      AND user_id = '${user_id}';`;
  },

  selectIdFromToken: function (token) {
    return `SELECT user_id 
              FROM tokens WHERE token = '${token}'
                LIMIT 1;`;
  },
};
