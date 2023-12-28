//imports
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

//middleware
app.use(cors());
app.use(bodyParser.json());

//main routes
app.use("/vehicles", require("./routes/vehicles"));

//listen on a port
const port = process.env.PORT || 6002;
app.listen(port, () => {
  console.log("Server started!");
});
