const testScores = {
  [Symbol("sally")]: [10, 20, 30],
  [Symbol("sally")]: [30, 40, 50],
  [Symbol("tim")]: [0, 0, 12],
};

const x = Symbol("hi boi");
const it = Object.getOwnPropertySymbols(testScores);

for (const key in it) {
  const element = it[key].description;
  console.log(element);
}
