const SibApiV3Sdk = require("sib-api-v3-sdk");
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey =
  "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";

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

sendSmtpEmail.subject = "My first node email";
sendSmtpEmail.htmlContent =
  "<html><body><h1>This is my first transactional email from node!</h1></body></html>";
sendSmtpEmail.sender = { name: "John Doe", email: "example@example.com" };
sendSmtpEmail.to = [{ email: "r@tinsleymail.co.uk", name: "Russell" }];
// sendSmtpEmail.cc = [{ email: "example2@example2.com", name: "Janice Doe" }];
// sendSmtpEmail.bcc = [{ email: "John Doe", name: "example@example.com" }];
sendSmtpEmail.replyTo = { email: "replyto@domain.com", name: "John Doe" };
// sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
// sendSmtpEmail.params = { parameter: "My param value", subject: "New Subject" };

apiInstance.sendTransacEmail(sendSmtpEmail).then(
  function (data) {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  },
  function (error) {
    console.error(error);
  }
);

////////////////sms

// const SibApiV3Sdk = require("sib-api-v3-sdk");
// const defaultClient = SibApiV3Sdk.ApiClient.instance;

// let apiKey = defaultClient.authentications["api-key"];
// apiKey.apiKey = "YOUR API KEY";

////////////////sms

let apiInstance = new SibApiV3Sdk.TransactionalSMSApi();

let sendTransacSms = new SibApiV3Sdk.SendTransacSms();

sendTransacSms = {
  sender: "07486030533",
  recipient: "07486030533",
  content: "Hello from me!!!",
};

apiInstance.sendTransacSms(sendTransacSms).then(
  function (data) {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  },
  function (error) {
    console.error(error);
  }
);
