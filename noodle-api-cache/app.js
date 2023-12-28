//express import and app instance
const express = require("express");
const app = express();

//pre process inbound requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//global cache
const cache = { GET: {}, POST: {}, PUT: {}, PATCH: {}, DELETE: {} };

//check request is valid
const validateFunc = require("./middleware/validate");
app.use(validateFunc);

//attach cache to request
const cacheFunc = require("./middleware/cache");
app.use(cacheFunc(cache));

//middleware to handle all request types and proxy them
const proxyFunc = require("./middleware/proxy");
app.use(proxyFunc);

//start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server running on port: ", port);
});
