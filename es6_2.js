// const myModule = require("./es6");

// myModule.example();

// console.log(myModule.someData);

// import myFunc, { hello } from "./es6";

// console.log(hello);

var settings = {
  width: 300,
  height: 200,
};

const { width: w = "100%", height: h = "200", color = "blue" } = settings;

console.log(w);
