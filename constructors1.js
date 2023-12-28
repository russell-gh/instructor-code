function Person(name) {
  this.name = name;

  return {
    getName: () => {
      return this.name;
    },
    setName: (newName) => {
      this.name = newName;
    },
  };
}

const person1 = new Person("Russell");
const person2 = new Person("Bobby");

// person1.setName("Greg");

console.log(person1.getName());
console.log(person2.getName());
