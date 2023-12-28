// var obj = {
//   hello() {
//     console.log("Hello!");
//   },
// };

// obj.hello();

// const myArray = [1, 2, 3, 4, 5];

// // const anotherArray = [4, 5, 7, 8, ...myArray];

// const [item1, item2, ...everythingElse] = myArray;

// console.log(everythingElse);

// const colourSet = new Set(["red", "orange", "blue"]);
// colourSet.add("pink");
// console.log(colourSet.values()); // ['red', 'orange', 'blue', 'pink']

const target = {
  message1: "hello",
  message2: "everyone",
};

const handler1 = {
  get: function (target) {
    return target.message1 + target.message2;
  },
};

const proxy1 = new Proxy(target, handler1);

console.log(proxy1.message1); // hello
console.log(proxy1.message2); // everyone

//
//
// let myWeakSet = new WeakSet();
// let obj = {};
// myWeakSet.add(obj);
// console.log(myWeakSet.has(obj));
// console.log(myWeakSet);

// break the last reference to the object we created earlier
// obj = 5;

// false because no other references to the object which the weakset points to
// because weakset was the only object holding a reference it released it and got garbage collected
// console.log(myWeakSet.has(obj));

// const myMap = new Map();
// myMap.set({ name: "russell" }, "pink");
// console.log(myMap); // Map(1) {2 => "pink"}

//
//yield
function* foo(x) {
  while (true) {
    x = x * 2;
    yield x;
  }
}

var g = foo(2);
console.log(g.next()); // -> 4
console.log(g.next()); // -> 4
console.log(g.next()); // -> 4

//currying
function add() {
  return (something) => {
    return something * something;
  };
}

const result = add()(10);
console.log(result);
