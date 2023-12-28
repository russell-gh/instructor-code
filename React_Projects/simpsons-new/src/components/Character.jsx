import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import DeleteButton from "./DeleteButton";

class Character extends Component {
  render() {
    return (
      <div className="flex-container">
        {this.props.characterDirection === "Right" ? (
          <>
            <Name text={this.props.nameText} />
            <Quote text={this.props.quoteText} />
            <Image text={this.props.nameText} image={this.props.image} />
          </>
        ) : (
          <>
            <Image image={this.props.image} />
            <Name text={this.props.nameText} />
            <Quote text={this.props.quoteText} />
          </>
        )}
        <DeleteButton
          itemNo={this.props.itemNo}
          onDelete={this.props.onDelete}
        />
      </div>
    );
  }
}

export default Character;
