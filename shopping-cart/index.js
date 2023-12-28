import { CartItem } from "./cartItem.js";

// const _cartItem = new CartItem({ title: "PS5", quantity: 1 });
// const _cartItem2 = new CartItem({ title: "Xbox One", quantity: 100 });

const arr = [
  new CartItem({ title: "PS1", quantity: 1, price: 100 }),
  new CartItem({ title: "PS2", quantity: 1, price: 200 }),
  new CartItem({ title: "PS3", quantity: 10, price: 300 }),
];

let total = 0;
arr.forEach((item) => {
  total += item.getLineTotal();
});
console.log(total);

// setInterval(() => {
//   console.log(_cartItem.getQuantity());
//   console.log(_cartItem2.getQuantity());
// }, 1000);
