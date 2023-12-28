function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("Parameter is not a number!");
  }
}

function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
  }
}

try {
  getRectArea(3, "A");
  console.log("Hi");
} catch (e) {
  console.error(e.toString());
  // expected output: "Parameter is not a number!"
}
