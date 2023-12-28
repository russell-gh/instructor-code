import React, { Component } from "react";

class Image extends Component {
  render() {
    const { image, name } = this.props;

    return (
      <div>
        <img src={image} alt={"Image of " + name} />
      </div>
    );
  }
}

export default Image;
