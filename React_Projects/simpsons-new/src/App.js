import React, { Component } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import "./App.css";

class App extends Component {
  state = { characters: [], input: "" };

  componentDidMount() {
    this.getApiData();
  }

  async getApiData() {
    try {
      const response = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
      );
      this.setState({ characters: response.data });
    } catch (error) {
      console.log("Error", error);
      alert("Sorry, the API is down!");
    }
  }

  onDelete = (itemNo) => {
    const characters = [...this.state.characters];
    characters.splice(itemNo, 1);
    this.setState({ characters });
  };

  onInput = (e) => {
    this.setState({ input: e.target.value });
  };

  filter = () => {
    //make a copy of the state so we do not change the original
    let filtered = [...this.state.characters];

    //check has the user made a search
    if (this.state.input) {
      filtered = filtered.filter((item) => {
        if (
          item.character.toLowerCase().includes(this.state.input.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
    }

    return filtered;
  };

  render() {
    console.log(this.state);

    const filtered = this.filter();

    return (
      <>
        <p>Search: </p>
        <input onInput={this.onInput} type="text" />
        {filtered ? (
          <Characters onDelete={this.onDelete} characters={filtered} />
        ) : (
          <div>Loading, please wait</div>
        )}
      </>
    );
  }
}

export default App;
