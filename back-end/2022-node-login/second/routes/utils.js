const fs = require("fs");
// require the file-system API, this allows us to write a a .txt log of all the requests to the disk, helpful for de-bugging purposes

// using an object, we can place our functions inside them and call them on import
module.exports = {
  // this functions only job is to create a unique identifier, based on the characters we provided it
  // this uniqueId will then be attached to each user
  // the more characters we provide, the greater the possibility that the uniqueId will be...well...unique
  getUniqueId: function () {
    let uniqueId = "";

    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    // character string that we want to choose from, which the loop will randomly pick for the given length

    let charsLength = chars.length;

    for (let i = 0; i < 32; i++) {
      uniqueId += chars.charAt(Math.floor(Math.random() * charsLength));
    }
    // for loop, loops 32 times and creates a string by randomly picking a char from the chars variable, to build the 32 character uniqueId

    return (uniqueId += Date.now());
    // adding Date.now enhances the probability of the string being unique
  },

  // this function gives us the ability to find the specifc index of a user, with the findIndex array method
  // for the purpose of keeping our code clean, we abstract it away, as soon as possible
  findArrayIndexOfUserByEmail: function (email, users) {
    return (indexOfUser = users.findIndex((user) => {
      return user.email === email; // this returns the position of the users email, inside the users array
    }));
  },

  addToLog: function (headers) {
    const str =
      "New request: " +
      new Date().toString() +
      " " +
      JSON.stringify(headers) +
      "\n"; // turn the requests in the headers into a string

    const fileName = new Date().getFullYear() + "_" + new Date().getMonth();

    fs.appendFile(fileName + ".txt", str, (err) => {
      // save the file, and add the appropriate extension
      if (err) {
        return console.log("An error occured!");
      }
    });
  },
};
