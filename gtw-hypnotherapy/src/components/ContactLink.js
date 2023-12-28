import React from "react";
import { Link } from "react-router-dom";
const ContactLink = () => {
  return (
    <>
      <div className="contactLink">
        <Link to="contacts">
          <h4 className="contactLinkButton">GET IN TOUCH</h4>
        </Link>
        <p>
          Get in touch and book your free initial consultation session today
        </p>
      </div>
    </>
  );
};

export default ContactLink;
