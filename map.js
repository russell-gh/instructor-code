// const lockerRoster = new Map();

// const staff = [
//   {
//     firstname: "James",
//     lastname: "Sherry",
//     id: 1,
//   },
//   {
//     firstname: "Pedro",
//     lastname: "Valera",
//     id: 2,
//   },
//   {
//     firstname: "Jack",
//     lastname: "May",
//     id: 3,
//   },
// ];

// const lockers = [
//   {
//     number: 1,
//     items: ["watch", "keys to x-wing"],
//   },
//   {
//     number: 2,
//     items: ["lightsaber", "phone"],
//   },
//   {
//     number: 3,
//     items: ["hoodie", "pot dog"],
//   },
// ];

// // Associate Staff with Lockers
// lockerRoster.set(staff[0], lockers[1]);
// lockerRoster.set(staff[1], lockers[2]);
// lockerRoster.set(staff[2], lockers[0]);

// console.log(lockerRoster);

// const pedrosLocker = lockerRoster.get(staff[1]);
// console.log("Pedro's locker number: ", pedrosLocker.number);
// console.log("Pedro's locker contents: ", pedrosLocker.items);

// console.log("lockerRoster", lockerRoster);

// const myMap = new Map();
// myMap.set(2, "pink");
// console.log(myMap); // Map(1) {2 => "pink"}

// console.log(myMap.size); // 1

// console.log(myMap.has(2)); // true

// console.log(myMap.get(2)); // 'pink'

// myMap.set(3, "red");
// console.log(myMap); // Map(2) {2 => "pink", 3 => "red"}

// myMap.delete(2);
// console.log(myMap); // Map(1) {3 => "red"}

// myMap.clear();
// console.log(myMap); // Map(0) {}

// const coins = new Map();
// coins.set(1, 0);
// coins.set(2, 0);

var map = new Map();
var weakmap = new WeakMap();

(function () {
  var a = { x: 12 };
  var b = { y: 12 };

  map.set(a, 1);
  weakmap.set(b, 2);
})();

var k1 = { a: 1 };
var k2 = { b: 2 };

var map = new Map();
var wm = new WeakMap();

map.set(k1, "k1");
wm.set(k2, "k2");

k1 = null;
map.forEach(function (val, key) {
  console.log(key, val); // k1 {a: 1}
});

k2 = null;
wm.get(k2); // undefined
