import React, { Component } from "react";
import { connect } from "react-redux";
/* eslint-disable */
import Signup from "./components/Signup";
/* eslint-enable */
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div onClick={() => this.props.dispatch({ type: "SIGNUP" })}>
          Show signup page
        </div>
        {/* eslint-disable */}
        {this.props.currentPage === "signup" && <Signup2 />}
         {/* eslint-enable */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentPage: state.currentPage,
  };
}

export default connect(mapStateToProps)(App);
