import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="46785e41-cd11-457f-8ded-1c0dae07f90c"
        />

        <div className="contact">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required id="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <input type="text" id="message" name="message" required />
          </div>
          <div>
            <button type="submit">Submit Form</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Contact;
