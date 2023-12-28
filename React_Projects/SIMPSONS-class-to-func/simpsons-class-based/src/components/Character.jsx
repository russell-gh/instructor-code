import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import "../App.css";

class Character extends Component {
  render() {
    const { character, onDelete, index } = this.props;

    return (
      <div className="character">
        {character.characterDirection === "Right" ? (
          <>
            <Name name={character.character} />
            <Quote onDelete={onDelete} quote={character.quote} index={index} />
            <Image image={character.image} name={character.character} />
          </>
        ) : (
          <>
            <Name name={character.character} />
            <Image image={character.image} />
            <Quote onDelete={onDelete} quote={character.quote} index={index} />
          </>
        )}
      </div>
    );
  }
}

export default Character;
