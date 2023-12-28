import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Interface from "./components/Interface.jsx";
import "./App.css";
import { SET_API_DATA } from "./redux/types.js";

class App extends Component {
  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    const result = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
    );

    this.props.dispatch({ type: SET_API_DATA, payload: result.data });
  };

  render() {
    return (
      <>
        <Interface />
      </>
    );
  }
}

export default connect()(App);
