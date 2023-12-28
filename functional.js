// let apiData;

document.getElementById("number").addEventListener("input", (e) => {
  const number = Number(e.target.value);

  const result = multiply(number);

  const html = getHtml(result);

  updateDOM(html);
});

function updateDOM(html) {
  document.getElementById("holder").innerText = html;
}

function getHtml(result) {
  return `<h1>${result}</h1>`;
}

function multiply(x) {
  return x * x;
}
