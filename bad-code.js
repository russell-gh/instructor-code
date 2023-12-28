const name = "Benjamin";

if (name == "Benjamin") {
  console.log("You are Benjamin");
} else if (name != "Benjamin") {
  console.log("you are NOT Benjamin");
}

if (name == "Benjamin") {
  console.log("You are " + name);
} else {
  console.log("you are NOT Benjamin");
}

const myFunc = function myFunc() {
  //some code
};

const myFunc2 = function () {
  //some code
};

function myFunc3(num) {
  if (num) {
    return num + num;
  } else {
    return "You did not specify a num";
  }
}
// console.log(myFunc3(1));

function myFunc3(num) {
  if (num) {
    return num + num;
  }
  return "You did not specify a num";
}
// console.log(myFunc3(1));

function myFunc4(num) {
  const result = num + num;

  if (typeof result === "number") {
    return result;
  }
}
console.log(myFunc4("3"));

function myFunc4(num) {
  if (typeof num === "number") {
    return num + num;
  }
}
console.log(myFunc4("3"));
