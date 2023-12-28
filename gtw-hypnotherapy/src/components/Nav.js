import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <>
      <Link to="/" className="link" onClick={() => props.closeMenu()}>
        Home
      </Link>
      <Link to="/about" className="link" onClick={() => props.closeMenu()}>
        About Me
      </Link>
      <Link to="whatIs" className="link" onClick={() => props.closeMenu()}>
        What Is Hypnotherapy?
      </Link>
      <Link to="sessions" className="link" onClick={() => props.closeMenu()}>
        Sessions & Prices
      </Link>
      <Link to="classes" className="link" onClick={() => props.closeMenu()}>
        Classes
      </Link>
      <Link to="faq" className="link" onClick={() => props.closeMenu()}>
        FAQ
      </Link>

      <Link to="contact" className="link" onClick={() => props.closeMenu()}>
        Get In Touch
      </Link>
      <Link
        to="privacyPolicy"
        className="link"
        onClick={() => props.closeMenu()}
      >
        Privacy Policy
      </Link>
    </>
  );
};

export default Nav;
