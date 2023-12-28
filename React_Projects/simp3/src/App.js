import React, { Component } from "react";
import Simpsons from "./simpsons.json"; //for backup purposes
import Character from "./components/Character";
import axios from "axios";
import "./App.css";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import { act } from "react-dom/test-utils";

class App extends Component {
  state = {};

  async componentDidMount() {
    try {
      const apiData = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
      );

      apiData.data.forEach((element, index) => {
        element.id = index;
      });

      apiData.data.sort((char1, char2) => {
        console.log(char1, char2);
        if (char1.character > char2.character) return 1;
        if (char1.character < char2.character) return -1;

        return 0;
      });

      this.setState({ apiData: apiData.data });
    } catch (error) {
      Simpsons.forEach((element, index) => {
        element.id = index;
      });

      this.setState({ apiData: Simpsons });
    }
  }

  onLike = (id) => {
    const index = this.state.apiData.findIndex((item) => {
      return item.id === id;
    });

    const apiData = [...this.state.apiData];

    //toggle like even if it starts at undefined
    if (apiData[index].liked === true) {
      apiData[index].liked = false;
    } else {
      apiData[index].liked = true;
    }

    this.setState({ apiData });
  };

  onDelete = (id) => {
    const index = this.state.apiData.findIndex((item) => {
      return item.id === id;
    });

    const apiData = [...this.state.apiData];
    apiData.splice(index, 1);

    this.setState({ apiData });
  };

  render() {
    const { apiData } = this.state;

    if (apiData === undefined) {
      return <h1>Loading.....</h1>;
    }

    let total = 0;
    apiData.forEach((item) => {
      if (item.liked === true) {
        total += 1;
      }
    });

    return (
      <>
        <h1>Total liked: {total}</h1>
        {apiData.map((item) => (
          <Character
            onLike={this.onLike}
            onDelete={this.onDelete}
            key={item.id}
            item={item}
          />
        ))}
      </>
    );
  }
}

export default App;
