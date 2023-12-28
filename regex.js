/***********************************************************
 * Lookaheads: match a string depending on what follows it
 ***********************************************************/

// ?= matches a string if it is followed by a specific substring:
console.log(
  "1",
  /James(?= Sherry)/.test("James Bond was played by Daniel Craig")
); // false
console.log(
  "2",
  /James(?= Sherry)/.test("My name is James Sherry, not James Bond")
); // true

// ?! performs the inverse operation, matching if a string is NOT followed by a specific substring:
console.log("3", /James(?! Sherry)/.test("James Bond is a spy")); // true
console.log("4", /James(?! Sherry)/.test("James Sherry is a developer")); // false

/***********************************************************
 * Lookbehinds: match a string depending on what precedes it
 * Lookaheads use the ?= symbol. Lookbehinds use ?<=.
 ***********************************************************/

// ?<= matches a string if it is preceded by a specific substring:
console.log("5", /(?<=James) Sherry/.test("James Bond is a spy")); // false
console.log("6", /(?<=James) Sherry/.test("James Sherry is a developer")); // true

// ?<! performs the inverse operation, matching if a string is NOT preceded by a specific substring:
console.log("7", /(?<!James) Sherry/.test("Paul Sherry is a spy")); // true
console.log("8", /(?<!James) Sherry/.test("James Sherry is a developer")); // false
