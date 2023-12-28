var express = require("express");
var cookieParser = require("cookie-parser");
var cors = require("cors");

var app = express();
app.use(cookieParser());

var allowedOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    exposedHeaders: ["Content-Length", "Token"],
  })
);

app.get("/", function (req, res) {
  // Cookies that have not been signed
  // console.log("Cookies: ", req.cookies);

  // // Cookies that have been signed
  // console.log("Signed Cookies: ", req.signedCookies);
  res.cookie("Token", "tobi");

  res.send("Hello World");
});

app.listen(8080);
