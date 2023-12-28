import React, { Component } from "react";
import Character from "./Character";

class Characters extends Component {
  render() {
    const { apiData, userInput, onInput, onDelete } = this.props;

    let filtered = apiData;

    if (userInput && userInput.length > 0) {
      filtered = apiData.filter((item) => {
        return item.character.toLowerCase().includes(userInput.toLowerCase());
      });
    }

    return (
      <>
        <label>Search</label>
        <input onInput={onInput} type="text" />
        {filtered.map((character, index) => {
          return (
            <Character
              onDelete={onDelete}
              key={index}
              index={index}
              character={character}
            />
          );
        })}
      </>
    );
  }
}

export default Characters;
