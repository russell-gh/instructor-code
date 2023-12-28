import React, { Component } from "react";

class Quote extends Component {
  state = { bold: true };

  render() {
    return (
      <>
        <p style={{ fontWeight: this.state.bold ? "bold" : "" }}>
          {this.props.quote}
        </p>
        <button onClick={() => this.setState({ bold: !this.state.bold })}>
          Toogle Bold
        </button>
      </>
    );
  }
}

export default Quote;
