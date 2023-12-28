import React from "react";

const Contact = (props) => {
  if (props.match.params.language === "spa") {
    return <p>+34 4568892</p>;
  }

  if (props.match.params.language === "usa") {
    return <p>+1 4568892</p>;
  }

  return <p>Please call us on 0123456789</p>;
};

export default Contact;
