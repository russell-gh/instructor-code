import React from "react";
const Contact = () => {
  return (
    <>
      <article className="pageBody">
        <h2>Get In Touch</h2>
        <div className="homeText">
          <form className="contactForm">
            <input
              type="hidden"
              name="_redirect"
              value="https://www.gtw-hypnotherapy.co.uk/formSuccess"
            />
            <label htmlFor="name">Name:</label>
            <input type="name" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="phone">Phone:</label>
            <input type="phone" id="phone" name="phone" />
            <label htmlFor="message">Message:</label>
            <textarea
              type="text"
              id="message"
              name="message"
              rows="10"
              columns="100"
              required
            />
            <input type="submit" value="Submit" className="contactFormButton" />
          </form>

          <h3 className="contactName">Georgina Taylor-Wyatt</h3>
          <h3 className="contactName"> DSFH, HPD, NCH (reg), AfSFH (reg)</h3>
          <ul className="noDecoration">
            <li>GTW Hypnotherapy </li>
            <li>Crawley Business Centre</li>
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

export default Contact;
