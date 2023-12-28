const express = require("express");
const app = express();
const data = require("./sample_data.json");
console.log(data.people[0].email);

console.log(process.env);

//api keys
const apiKeys = { russell: "xyz", fred: "abc" };

app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

//some middleware
function checkApiKey(request, response, next) {
  console.log(
    data,
    "middleware",
    request.headers.apikey,
    apiKeys[request.headers.user] === request.headers.apikey
  );

  next();
}

app.post("/", (request, response) => {
  console.log(request.body);
});

app.get("/", checkApiKey, (request, response) => {
  //   console.log(
  //     "A new request arrived!",
  //     request.headers,
  //     request.socket.remoteAddress
  //   );
  //   response.send("Hello from the server!");
  //response.status(200).json({ a: 1, b: 2 }); //json or send
});

app.listen(6000, () => {
  console.log("The server is running!");
});
