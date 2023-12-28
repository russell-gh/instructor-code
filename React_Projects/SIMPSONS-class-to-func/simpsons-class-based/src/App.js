import React, { Component } from "react";
import axios from "axios";
import Interface from "./components/Interface";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getApiData();
  }

  onDelete = (index) => {
    const apiData = this.state.apiData;
    apiData.splice(index, 1);
    this.setState({ apiData });
  };

  getApiData = async () => {
    //clear old state
    this.setState({ apiData: undefined });

    try {
      const response = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
      );
      console.log(response);
      this.setState({ apiData: response.data });
    } catch (error) {
      console.log(error.message);
      alert("Sorry, the API is down");
    }
  };

  onInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    return (
      <Interface
        getApiData={this.getApiData}
        onInput={this.onInput}
        onDelete={this.onDelete}
        apiData={this.state.apiData}
        userInput={this.state.userInput}
      />
    );
  }
}

export default App;
