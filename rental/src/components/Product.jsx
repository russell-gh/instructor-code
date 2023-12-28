import React, { Component } from "react";

class Product extends Component {
  render() {
    const { name, available, prices, pictures, id } = this.props.product;
    const { onClick } = this.props;

    return (
      <div className="product">
        <h2>{name}</h2>
        <p>Weekly: &pound;{prices.weekly}</p>
        {pictures.map((picture, index) => {
          return (
            <img
              key={picture}
              src={"./images/" + picture}
              alt={name + " " + index}
            />
          );
        })}
        <button onClick={() => onClick(id)}>Rent</button>
      </div>
    );
  }
}

export default Product;
