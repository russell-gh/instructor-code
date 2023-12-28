//imports
const express = require("express");
const app = express.Router();

//my app data
const cars = {};

app.get("/cars", (request, response) => {
  response.send(cars);
});

app.post("/car", (request, response) => {
  console.log(request.body);
  cars[request.body.make] = request.body.model;
  response.send("Hey, car was added!");
});

app.patch("/car", (request, response) => {
  cars[request.body.make] = request.body.model;
  response.send("Car was updated");
});

app.delete("/car", (request, response) => {
  delete cars[request.body.make];
  response.send("Car was deleted");
});

module.exports = app;
