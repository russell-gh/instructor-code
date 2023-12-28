import { addDomNode, updateDomNode } from "./utils.js";

export class CartItem {
  constructor(item) {
    console.log("cart item alive");
    this.item = item;
    this.quantity = item.quantity;

    this.randomId = Math.round(Math.random() * 10000000);

    //add to dom
    addDomNode(this.randomId, this.item.title, this.item.quantity);

    const incrementBtn = document.getElementById("increment_" + this.randomId);
    const decrementBtn = document.getElementById("decrement_" + this.randomId);

    incrementBtn.addEventListener("click", () => {
      this.increment();
    });
    decrementBtn.addEventListener("click", () => {
      this.decrement();
    });
  }

  increment() {
    this.quantity += 1;
    updateDomNode("quantity_" + this.randomId, this.quantity);
  }

  decrement() {
    this.quantity -= 1;
    updateDomNode("quantity_" + this.randomId, this.quantity);
  }

  getQuantity() {
    return this.quantity;
  }

  getLineTotal() {
    return this.item.price * this.quantity;
  }
}
