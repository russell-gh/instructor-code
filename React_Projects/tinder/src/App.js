import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Interface from "./components/Interface";
import { API_URL } from "./config";
import { SET_USERS } from "./types";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const users = await axios.get(API_URL);
    this.props.dispatch({ type: SET_USERS, payload: users.data });
  };

  render() {
    return (
      <>
        <h1>Welcome to the Rinder app!</h1>
        <Interface />
      </>
    );
  }
}

export default connect()(App);
