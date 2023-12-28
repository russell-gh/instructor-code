import axios from "axios";
import React, { Component } from "react";
import Simpsons from "./components/simpsons";

class App extends Component {
  state = { getNewQuotes: false, show: true };

  render() {
    if (!this.state.apiData) {
      return <h1>Awaiting API data!</h1>;
    }

    if (!this.state.show) {
      return (
        <div>
          <h1>Please turn on the display!</h1>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }

    let filtered = this.state.apiData.filter((item) => {
      return true; //item.character.includes(this.state.searchTerm);
    });

    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        <button onClick={() => this.getNewQuotes()}>Get new quotes!</button>
        <p>Enter a search term:</p>
        <input onInput={this.onInput} type="text"></input>
        {filtered.map((item, index) => {
          return (
            <Simpsons
              key={index}
              onDelete={this.onDelete}
              index={index}
              item={item}
            />
          );
        })}
      </div>
    );
  }

  toggleDisplay = () => {
    this.setState({ show: !this.state.show });
  };

  getNewQuotes = async () => {
    console.log("get new quotes!");
    // this.setState({ getNewQuotes: true });

    const response = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=100"
    );
    this.setState({ apiData: response.data });
  };

  onInput = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  onDelete = (index) => {
    const copyOfState = this.state.apiData;
    copyOfState.splice(index, 1);
    this.setState({ apiData: copyOfState });
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=100"
    );
    this.setState({ apiData: response.data });
  }
}

export default App;
