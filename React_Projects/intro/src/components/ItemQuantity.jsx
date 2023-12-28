import React, { Component } from "react";

class ItemQuantity extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>You are ordering {this.props.quantity} items</p>
        <button
          onClick={() => {
            this.props.addQuantity(this.props.index);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default ItemQuantity;
