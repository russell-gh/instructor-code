const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/load-test", (req, res) => {
  console.log(req.ip);
  res.sendStatus(200);
});

// app.get("/", (request, response) => {
//   //send the html page
//   response.send("<p>Hello</p>");
// });

app.listen(process.env.PORT || 5005);
