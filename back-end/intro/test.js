const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.post("/", (request, response) => {
  console.log(request.body);
});

app.listen(6001);
