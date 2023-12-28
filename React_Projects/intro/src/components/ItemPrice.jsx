import React, { Component } from "react";

class ItemPrice extends Component {
  render() {
    return <p>The item costs £{this.props.price / 100}</p>;
  }
}

export default ItemPrice;
