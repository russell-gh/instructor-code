import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE_CHARACTER } from "../redux/types";

class Quote extends Component {
  render() {
    return (
      <div>
        <p>{this.props.quote}</p>
        <button
          onClick={() =>
            this.props.dispatch({
              type: DELETE_CHARACTER,
              payload: this.props.quote,
            })
          }
        >
          Delete
        </button>
      </div>
    );
  }
}

export default connect()(Quote);
