import React from "react";
const FormFail = () => {
  return (
    <>
      <article className="pageBody">
        <h2>Get In Touch</h2>
        <div className="homeText">
          <p className="formComplete">
            Sorry, something went wrong, we may be having technical difficulties
            right now. Please try again later or get in touch using my contact
            details below.
          </p>
          <h3>Georgina Taylor-Wyatt DSFH, HPD, NCH (reg), AfSFH (reg)</h3>
          <ul className="noDecoration">
            <li>GTW Hypnotherapy Crawley Business Centre</li>
            <li> Stephenson Way</li>
            <li> Three Bridges</li>
            <li>Crawley</li>
            <li> RH10 1TN </li>
            <li>
              {" "}
              <a href="www.gtw-hypnotherapy.co.uk">
                www.gtw-hypnotherapy.co.uk
              </a>{" "}
            </li>
            <li>
              <a href="mailto:info@gtw-hypnotherapy.co.uk">
                info@gtw-hypnotherapy.co.uk
              </a>{" "}
            </li>
            <li>
              <a href="tel:07597339913">07597 339913</a>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
};

export default FormFail;
