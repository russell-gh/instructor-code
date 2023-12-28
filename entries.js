let ob = { a: 1, b: 2 };

console.log(Object.entries(ob));
console.log(Object.keys(ob));
console.log(Object.values(ob));

console.log(Object.getOwnPropertyNames(ob));

let newOb = JSON.stringify(ob);
console.log(newOb);
newOb = JSON.parse(newOb);
console.log(newOb);
