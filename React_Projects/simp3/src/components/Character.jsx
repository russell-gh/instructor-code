import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Like from "./Like";

class Character extends Component {
  render() {
    // const { item } = this.props;
    const { character, quote, image, characterDirection, id, liked } =
      this.props.item;

    if (characterDirection === "Right") {
      return (
        <div className="character">
          <Name name={character} />
          <Quote quote={quote} />
          <Image image={image} />
          <Like id={id} liked={liked} onLike={this.props.onLike} />
          <button onClick={() => this.props.onDelete(id)}>Delete</button>
        </div>
      );
    }
    return (
      <div className="character">
        <Name name={character} />
        <Image image={image} />
        <Quote quote={quote} />
        <Like id={id} onLike={this.props.onLike} />
        <button onClick={() => this.props.onDelete(id)}>Delete</button>
      </div>
    );
  }
}

export default Character;
