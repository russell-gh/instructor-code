import React, { Component } from "react";
import { FaUserAlt, FaComments, FaSearch } from "react-icons/fa";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div className="footer">
          <div>
            <FaSearch />
          </div>
          <div>
            <FaComments />
          </div>
          <div>
            <FaUserAlt />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
