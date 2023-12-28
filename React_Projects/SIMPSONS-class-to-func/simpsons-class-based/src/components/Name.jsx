import React, { Component } from "react";

class Name extends Component {
  state = { liked: false };

  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <button onClick={() => this.setState({ liked: !this.state.liked })}>
          Like
        </button>
        {this.state.liked && <p>You like this character!</p>}
      </div>
    );
  }
}

export default Name;
