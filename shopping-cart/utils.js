export function addDomNode(id, title, quantity = 1) {
  //   const node = document.createElement(newNode);
  //   node.setAttribute("id", newId);
  //   const nodeText = document.createTextNode(newText);
  //   node.appendChild(nodeText);
  //   document.getElementById("root").appendChild(node);

  const newHtml = `<div class="row">
                        <div>${title}</div>
                        <div>
                            <button id="increment_${id}">+</button>
                            <button id="decrement_${id}">-</button>
                        </div>
                        <div id="quantity_${id}">${quantity}</div>
                    </div>`;

  const r = document
    .getElementById("root")
    .insertAdjacentHTML("beforeend", newHtml);
}

export function updateDomNode(idToUpdate, newValue) {
  const item = document.getElementById(idToUpdate);
  console.log(item);
  item.innerText = newValue;
}
