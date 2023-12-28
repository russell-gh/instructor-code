require("dotenv").config();
const express = require("express");
const host = "localhost";
const port = 5000;
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const chalk = require("chalk");
const checkToken = require("./middleware/checkToken");
const { isDST } = require("./utils.js");
app.use(cors());
app.use((req, res, next) => {
  bodyParser.json()(req, res, (err) => {
    if (err) {
      return res.send({ statusCode: 2, type: 200 }); // Bad request
    }
    next();
  });
});

app.use("/authentication", require("./routes/authentication"));
app.use("/activity", require("./routes/activity"));
app.use("/puzzle", require("./routes/puzzle"));
app.use("/user/admin", require("./routes/adminUser"));
app.use("/user/service", checkToken, require("./routes/serviceUser"));
app.use("/notify", require("./routes/notify"));

app.listen(port, () => {
  console.log(chalk.cyan("The app is running"));
});
