//imports
import { productData } from "./productData.js";
import { generateProducts, generateCart } from "./htmlGenerator.js";

//dom references
const productsRef = document.getElementById("products");
const cartRef = document.getElementById("cart");

//items in cart
const cartContents = [];

//create interface
function createInterface() {
  //create html and insert into the dom
  productsRef.innerHTML = generateProducts(productData);

  startEventListeners();
}

function startEventListeners() {
  //add event listerners
  productData.forEach((product) => {
    document
      .getElementById(product.id)
      .addEventListener("click", onBuyNowClick);
  });
}

const productCache = {};

function getItem(id) {
  //check if I already did this work
  if (productCache[id]) {
    return productCache[id];
  }

  //find the item from the id
  const foundItem = cartContents.find((item) => {
    return item.id === Number(id);
  });

  //store a copy in case I need it later
  productCache[id] = foundItem;

  //return the answer
  return foundItem;
}

const onBuyNowClick = (e) => {
  //find the item
  const item = getItem(e.target.id);

  if (item) {
    item.qty = item.qty + 1; //item already in cart
  } else {
    cartContents.push({ id: Number(e.target.id), qty: 1 }); //new item so added it with qty of 1
  }

  //add cart
  cartRef.innerHTML = generateCart(cartContents);
};

const onDeleteCartItem = (e) => {
  const index = cartContents.findIndex(
    (item) => item.id === Number(e.target.id)
  );

  cartContents.splice(index, 1);
  cartRef.innerHTML = generateCart(cartContents);
};

//create delegated listeners
cartRef.addEventListener("click", onDeleteCartItem);

//start everything
createInterface();
