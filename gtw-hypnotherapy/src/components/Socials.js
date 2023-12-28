import React from "react";
import facebook from "../assets/facebook-logo.svg";
import instagram from "../assets/instagram-logo.svg";
const Socials = () => {
  return (
    <>
      <div className="socialLinks">
        <a
          href="https://www.facebook.com/gtwhypnotherapy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook Logo"></img>
        </a>
        <a
          href="https://www.instagram.com/gtw_hypnotherapy/?hl=en-gb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram Logo"></img>
        </a>
      </div>
    </>
  );
};

export default Socials;
