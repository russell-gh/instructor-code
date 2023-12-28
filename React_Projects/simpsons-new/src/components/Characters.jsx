import React, { Component } from "react";
import Character from "./Character";

class Characters extends Component {
  render() {
    return (
      <>
        {this.props.characters &&
          this.props.characters.map((character, position) => {
            return (
              <div className="character" key={character + position}>
                <Character
                  characterDirection={character.characterDirection}
                  nameText={character.character}
                  quoteText={character.quote}
                  image={character.image}
                  onDelete={this.props.onDelete}
                  itemNo={position}
                />
              </div>
            );
          })}
      </>
    );
  }
}

export default Characters;
