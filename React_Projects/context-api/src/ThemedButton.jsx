import React, { Component, Context } from "react";

class ThemedButton extends Component {
  render() {
    console.log(this.context, this.props);

    return (
      <MyContext.Consumer>
        <div>Hello</div>
      </MyContext.Consumer>
    );
  }
}

export default ThemedButton;
