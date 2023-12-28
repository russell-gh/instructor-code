import React, { Component } from "react";
import ItemPrice from "./ItemPrice";
import ItemQuantity from "./ItemQuantity";
import Total from "./Total";

class CartItem extends Component {
  state = {};

  getText() {
    return <p>Hello World</p>;
  }

  render() {
    return (
      <div>
        {this.getText()}
        <h1>I am a cart item</h1>
        <ItemPrice price={this.props.item.price} />
        <ItemQuantity
          index={this.props.index}
          addQuantity={this.props.addQuantity}
          quantity={this.props.item.quantity}
        />
        <Total
          price={this.props.item.price}
          quantity={this.props.item.quantity}
        />
      </div>
    );
  }
}

export default CartItem;
