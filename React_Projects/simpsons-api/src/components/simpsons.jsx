import React, { Component } from "react";
import Character from "./character";
import Quote from "./quote";
import Image from "./image";

class Simpsons extends Component {
  render() {
    const { character, image, quote } = this.props.item;

    return (
      <div>
        <Character character={character} />
        <Quote quote={quote} />
        <Image image={image} character={character} />
        <button onClick={() => this.props.onDelete(this.props.index)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Simpsons;
