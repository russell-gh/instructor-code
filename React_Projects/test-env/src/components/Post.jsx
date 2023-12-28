import React, { Component } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

class Post extends Component {
  state = {};
  render() {
    return (
      <>
        <section className="post-container">
          <div className="user-banner">
            <h2>Jo Walker</h2>
          </div>
          <a href="url">View Post</a>
          <section className="post-content">
            <div>
              <p>Posted 2 hours ago</p>
              <p>
                <FaMapMarkerAlt className="fa-icon" />
                Highbury Grove, London N5 2EQ
              </p>
              <p>
                <FaCalendarAlt className="fa-icon" /> Wed 21/07/2021
              </p>
              <p>
                <FaClock className="fa-icon" />
                7:30pm
              </p>
            </div>
            <div className="positions">
              <h2>Positions Needed</h2>
              <span>GS</span>
              <span>GA</span>
              <span>WA</span>
              <span>C</span>
              <span>WD</span>
              <span>GD</span>
              <span>GK</span>
            </div>
            <div className="message-box">
              <p>
                Hey, we need a couple of players tonight in Highbury B league.
                Let me know if you’re free, even if you....
              </p>
            </div>
          </section>
        </section>
      </>
    );
  }
}

export default Post;
