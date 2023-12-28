//ts-node or npm i typescript then tsc (filename)
console.log("Hello World!");

function add(x: number, y: number): number {
  return x + y;
}

const first: number = 1;
const second: number = 4;

console.log(add(3, second));

const arr = [1, 2, 3, 4, 56];
for (const item of arr) {
  console.log(item);
}

type feeling = "happy" | "sad";

let iAm: feeling = "happy";

interface item {
  name: string;
  age: number;
}

function greet(item: item) {
  console.log("item: ", item.age);
}

const me = { name: "russell", age: 99 };

greet(me);

let arr2: number[] = [1, 2, 3, 4, 5];

let arr3: any[] = [1, 2, 3, 4, 5];
