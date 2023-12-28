import React, { Component } from "react";
import products from "../data.json";
import Product from "./Product";
import Rent from "./Rent";

class Products extends Component {
  state = { selectedRentId: undefined };

  //rent click
  onClick = (id) => {
    this.setState({ selectedRentId: id });
  };

  render() {
    const { selectedRentId } = this.state;

    products.sort(() => (Math.random() < 0.5 ? 1 : -1));

    //rent selected
    if (selectedRentId) {
      return (
        <Rent selectedRentId={selectedRentId} onSelectedClick={this.onClick} />
      );
    }

    return (
      <div className="products">
        {products.map((product, index) => {
          return (
            <Product key={index} product={product} onClick={this.onClick} />
          );
        })}
      </div>
    );
  }
}

export default Products;
