concernEmail = (email, name) => {
  let subject = "Please check on your service user";

  let text = 
  `Dear Admin User, 
  \n
      We are writing to inform you that ${name} has not completed their due challenge. Please get in touch with them as soon as possible to ensure that they are okay.
  \n
  \n
  Kind regards,
  \n
  \n
  The minds behind the Liberty Bell App`;

  let html = 
  `Dear Admin User, 
  <br/>
  <br/>
      We are writing to inform you that ${name} has not completed their due challenge. Please get in touch with them as soon as possible to ensure that they are okay.
      <br/>
      <br/>
  Kind regards,
  <br/>
  <br/>
  The minds behind the Liberty Bell App`;

  return { subject, html, text };
};

module.exports = concernEmail;
