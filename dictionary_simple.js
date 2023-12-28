const input = ["and", "AND_DEFINITION"];

const split = input[0].split("").reverse();

let output;

split.forEach((letter, arrayIndex) => {
  if (arrayIndex === 0) {
    output = { letter, definition: input[1] };
  } else {
    output = { letter, definition: null, children: [output] };
  }
});

output = [output];

console.log(JSON.stringify(output));

const item = [
  {
    letter: "a",
    definition: null,
    children: [
      {
        letter: "n",
        definition: null,
        children: [{ letter: "d", definition: "AND_DEFINITION" }],
      },
    ],
  },
];
