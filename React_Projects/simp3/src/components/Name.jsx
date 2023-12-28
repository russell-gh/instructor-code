import React, { Component } from "react";

class Name extends Component {
  render() {
    return <h1>{this.props.children}</h1>;
  }
}

export default Name;
