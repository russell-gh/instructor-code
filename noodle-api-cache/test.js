const axios = require("axios");

let counter = 0;

const test = async () => {
  try {
    const result = await axios.get(
      //"http://localhost:5000/?expiry=86400&url=https://jsonplaceholder.typicode.com/todos?count=" +
      "https://noodle-api-cache.herokuapp.com/?expiry=86400&url=https://jsonplaceholder.typicode.com/todos?count=" +
        counter
    );
    console.log("done!", counter);
    counter += 1;
  } catch (error) {
    console.log(error);
  }
};

setInterval(test, 1000);
