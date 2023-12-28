function nameRandomiser(...names) {
  names.sort(() => 0.5 - Math.random());

  if (names.length % 2 != 0) {
    names.push("themselves");
  }

  for (i = 0; i < names.length; i += 2) {
    console.log(`${names[i]} will be partnered with ${names[i + 1]}.`);
  }
}
nameRandomiser(
  "Julian",
  // "Nick H",
  "Eddie",
  "Sam",
  "Krish",
  "Niall",
  "Jodina",
  "John"
  // "Miguel"
  // "Grazell"
);
