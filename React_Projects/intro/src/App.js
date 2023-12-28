import React, { Component } from "react";
import CartItem from "./components/CartItem";

class App extends Component {
  state = {
    itemsInCart: [
      { title: "Red Toy", price: 500, quantity: 1 },
      { title: "Blue Toy", price: 700, quantity: 2 },
      { title: "Green Toy", price: 800, quantity: 5 },
      { title: "Orange Toy", price: 200, quantity: 2 },
    ],
  };

  addQuantity = (index) => {
    //make a copy of the itemsInCart array
    let newItemsInCart = [...this.state.itemsInCart];

    //update the correct array item entry
    newItemsInCart[index].quantity += 1;

    //put the updated data back into the state
    this.setState({ itemsInCart: [...this.state.itemsInCart] });
  };

  render() {
    return (
      <div>
        <h1>My Shopping Cart</h1>
        {this.state.itemsInCart.map((item, index) => {
          return (
            <CartItem
              index={index}
              addQuantity={this.addQuantity}
              item={item}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
