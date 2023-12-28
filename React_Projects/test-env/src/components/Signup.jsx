import React, { Component } from "react";

// some of this stuff might be wrong now, since I am trying to impliment Redux, whereas I wasnt before.

class Signup extends Component {
  state = { firstname: "", lastname: "", email: "", password: "" };

  onInput = (e) => {
    console.log(e.target.id, e.target.value);

    this.setState({ firstname: e.target.value });
  };
  render() {
    return (
      <div className="signup-form-container">
        <div className="form-container">
          <h1>Sign-Up</h1>
          <form>
            <input
              type="text"
              value={this.state.name}
              onInput={this.onInput}
              id="first-name"
              name="firstname"
              placeholder="First Name"
            />
            <input
              type="text"
              value={this.state.name}
              onInput={this.onInput}
              id="last-name"
              name="lastname"
              placeholder="Last Name"
            />
            <input
              type="email"
              value={this.state.name}
              onInput={this.onInput}
              name="email"
              placeholder="Email"
            />
            <input
              type="password"
              value={this.state.name}
              onInput={this.onInput}
              name="password"
              placeholder="Password"
            />
          </form>
        </div>
        <button
          type="submit"
          value="Submit"
          onClick={() => this.props.dispatch({ type: "SIGNUP" })}
        >
          Sign-Up
        </button>
        <p>
          Already have an account? <a href="url">Sign-in</a>
        </p>
      </div>
    );
  }
}

export default Signup;
