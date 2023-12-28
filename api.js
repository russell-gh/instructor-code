let myObj = {
  name: "Russell",
  age: 39,
  myFunc: () => {
    console.log("Hello");
  },
};

let string = JSON.stringify(myObj);

let anObjectAgain = JSON.parse(string);

console.log(myObj, string, anObjectAgain);
