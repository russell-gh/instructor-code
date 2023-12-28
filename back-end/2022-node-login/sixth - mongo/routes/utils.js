const fs = require("fs");

module.exports = {
  getUniqueId: function () {
    let uniqueId = "";

    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";

    let charsLength = chars.length;

    for (let i = 0; i < 32; i++) {
      uniqueId += chars.charAt(Math.floor(Math.random() * charsLength));
    }

    return (uniqueId += Date.now());
  },
  findArrayIndexOfUserByEmail: function (email, users) {
    return (indexOfUser = users.findIndex((user) => {
      return user.email === email;
    }));
  },

  addToLog: function (headers) {
    const str =
      "New request: " +
      new Date().toString() +
      " " +
      JSON.stringify(headers) +
      "\n";
    const fileName = new Date().getFullYear() + "_" + new Date().getMonth();

    fs.appendFile(fileName + ".txt", str, (err) => {
      if (err) {
        return console.log("An error occured!");
      }
    });
  },
};
