import React, { Component } from "react";

class Register extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Register with Date Me!</h1>
        Email
        <input type="text" />
        Name
        <input type="text" />
        Age
        <input type="text" />
        Sex
        <input type="text" />
        Location
        <input type="text" />
        Height
        <input type="text" />
        Eye Color
        <input type="text" />
        Inyterested In
        <input type="text" />
        Travel Distance
        <input type="text" />
        <button onClick={() => this.props.setScreenMode(1)}>Submit</button>
      </>
    );
  }
}

export default Register;
