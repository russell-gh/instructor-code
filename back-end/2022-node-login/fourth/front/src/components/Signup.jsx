import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  state = {};

  onInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:6001/add/",
        this.state
      );

      if (response.data.status) {
        this.props.setScreen(1);
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div onInput={this.onInput}>
        Signup
        <input type="text" name="user_name" />
        <label htmlFor="username">Username</label>
        <input type="text" name="email" />
        <label htmlFor="email">Email</label>
        <input type="text" name="password" />
        <label htmlFor="password">Password</label>
        <button onClick={this.onSignup}>Signup</button>
      </div>
    );
  }
}

export default Signup;
