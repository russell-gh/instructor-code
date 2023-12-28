forgotPassword = (password) => {
  let subject = "Liberty Bell App Password reset request";
  let text = 
`Dear Admin User, 
\n
\n
    Your password reset request has been received.
\n
\n
    Here is your new temporary password: ${password}
\n
\n
    Please reset your password to something more memorable.
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
    Your password reset request has been received.
    <br/>
    <br/>
    Here is your new temporary password: ${password}
    <br/>
    <br/>
    Please reset your password to something more memorable.
    <br/>
    <br/>
Kind regards,
<br/>
<br/>
The minds behind the Liberty Bell App`;
  return { subject, html, text };
};

module.exports = forgotPassword;
