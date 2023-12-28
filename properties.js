let ob = function () {
  "[1, 2, 3, 4, 5]";
};

// Adding a property to ob using Object.defineProperty
Object.defineProperty(ob, "c", {
  value: 3,
  enumerable: false,
  writable: false,
  configurable: false,
});

ob.c; // => 3

ob.c = 100;

console.log(Object.getOwnPropertyDescriptor(ob, "c"), ob);
// => {value: 3, enumerable: false, writable: false, configurable: false}

// numerable: I can access to all of them using a for..in loop. Also, enumerable property keys of an object are returned using Object.keys method.
// Writable: I can modify their values, I can update a property just assigning a new value to it: ob.a = 1000;
// Configurable: I can modify the behavior of the property, so I can make them non-enumerable, non-writable or even non-cofigurable if I feel like doing so. Configurable properties are the only ones that can be removed using the delete operator.
