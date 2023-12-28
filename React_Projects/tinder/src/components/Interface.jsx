import React, { Component } from "react";
import { connect } from "react-redux";
import Signup from "./Signup";
import Search from "./Search";
import Matches from "./Matches";
import Navigation from "./Navigation";

class Interface extends Component {
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
        {this.props.screenMode > 0 && <Navigation />}
        {this.props.screenMode === 0 && <Signup />}
        {this.props.screenMode === 1 && <Search />}
        {this.props.screenMode === 2 && <Matches />}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    screenMode: state.screenMode,
  };
}

export default connect(mapStateToProps)(Interface);
