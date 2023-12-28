import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {};

  onInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:6001/login",
        this.state
      );

      console.log(response);

      if (response.data.status) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", this.state.email);
        this.props.setScreen(2);
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
        Login
        <input type="text" name="email" />
        <label htmlFor="email">Email</label>
        <input type="text" name="password" />
        <label htmlFor="password">Password</label>
        <button onClick={this.onLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
