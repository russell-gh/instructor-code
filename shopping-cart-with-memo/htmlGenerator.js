import { productData } from "./productData.js";
import { getConsumerPrice } from "./utils.js";

export const generateProduct = (product) => {
  //creates the html for a product

  return `<div class="productContainer">
            <h1>${product.details.shortName}</h1>
            <h2>${product.details.longName}</h2>
            <p>${product.details.description}</p>
            <p>&pound;${getConsumerPrice(
              product.pricing.price,
              product.pricing.tax_rate
            )}</p>
            <button id="${product.id}">Buy now</button>
          </div>`;
};

export const generateProducts = (products) => {
  let html = "";

  for (const product of products) {
    html += generateProduct(product);
  }

  return html;
};

export const generateCartItem = (item) => {
  return `<div id="cartItem">
            <h1>${item.title}</h1>
            <h2>&pound;${item.price}</h2>
            <p>${item.qty}</p>
            <p>&pound;${item.lineTotal}</p>
            <button id="${item.id}">Remove</button>
          </div>`;
};

export const generateCart = (cartContents) => {
  let html = "";

  let grandTotal = 0;

  for (const item of cartContents) {
    const product = productData.find((product) => {
      return product.id === item.id;
    });

    const lineTotal =
      getConsumerPrice(product.pricing.price, product.pricing.tax_rate) *
      item.qty;

    grandTotal += lineTotal; //total of cart value

    html += generateCartItem({
      id: product.id,
      title: product.details.shortName,
      price: getConsumerPrice(product.pricing.price, product.pricing.tax_rate),
      qty: item.qty,
      lineTotal,
    });
  }

  return `${html} <h3>&pound;${grandTotal}</h3>`;
};
