import axios from "axios";
import React, { Component } from "react";

class App extends Component {
  state = { searchTerm: "Homer Simpson" };
  render() {
    console.log(this.state);
    if (!this.state.apiData) {
      return "Waiting for API Data!";
    }

    const filtered = this.state.apiData.filter((item) => {
      return item.character === this.state.searchTerm;
    });

    console.log(filtered);

    return (
      <div>
        The Simpsons! <input onInput={this.onInput} type="text" />
        {filtered.length > 0 && filtered[0].quote}
      </div>
    );
  }

  onInput = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  //ignore the below code, it simply gets the api data
  //and places it inside the state
  async componentDidMount() {
    const response = await axios.get(
      "https://nomorelimts.herokuapp.com/proxy?url=https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    console.log(response);
    this.setState({ apiData: response.data });
  }
}

export default App;
