const person = {
  firstName: "James",
  lastName: "Sherry",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName); // James Sherry

person.fullName = "Fred Durst";
console.log(person.fullName); // Fred Durst
