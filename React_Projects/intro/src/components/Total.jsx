import React, { Component } from "react";

class Total extends Component {
  state = {};
  render() {
    return <p>The total is £{this.props.quantity * this.props.price}</p>;
  }
}

export default Total;
