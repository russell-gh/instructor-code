import React, { Component } from "react";
import { connect } from "react-redux";

class Navigation extends Component {
  onLogOut = () => {
    this.props.dispatch({
      type: "SET_SCREEN_MODE",
      payload: 0,
    });

    localStorage.clear();
  };

  render() {
    return (
      <>
        <p
          onClick={() =>
            this.props.dispatch({
              type: "SET_SCREEN_MODE",
              payload: 1,
            })
          }
        >
          Search
        </p>
        <p
          onClick={() =>
            this.props.dispatch({
              type: "SET_SCREEN_MODE",
              payload: 2,
            })
          }
        >
          Matches
        </p>
        <p onClick={this.onLogOut}>Logout</p>
      </>
    );
  }
}

export default connect()(Navigation);
