import React, { Component } from "react";

class Counter extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>My Counter</h1>
        <p data-testid="count-display"></p>
      </div>
    );
  }
}

export default Counter;
