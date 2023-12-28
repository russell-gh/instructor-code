//14th February 2020 at 2pm in the UK > 1581688800
//22nd July 2021 at 4pm in Germany > 1626433200

let answer = 1626433200 - 1581688800;
console.log(answer / 60 / 60 / 24 / 30.5);

const myDate = new Date("1980 11 01");
console.log(myDate);

var today = new Date().toLocaleDateString(
  "en-GB", // locale

  {
    // options

    day: "numeric",

    month: "short",

    year: "numeric",
  }
);

console.log(today);
