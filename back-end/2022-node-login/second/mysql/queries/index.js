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
};
