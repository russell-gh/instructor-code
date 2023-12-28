import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import "../App.css";

class Character extends Component {
  render() {
    const { character, index } = this.props;

    return (
      <div className="character">
        {character.characterDirection === "Right" ? (
          <>
            <Name name={character.character} />
            <Quote quote={character.quote} />
            <Image image={character.image} name={character.character} />
          </>
        ) : (
          <>
            <Name name={character.character} />
            <Image image={character.image} />
            <Quote quote={character.quote} />
          </>
        )}
      </div>
    );
  }
}

export default Character;
