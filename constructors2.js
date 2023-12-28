function Person(name) {
  this.name = name;

  this.getName = () => {
    return this.name;
  };

  this.setName = (newName) => {
    this.name = newName;
  };
}

Person.prototype.hello = function () {
  console.log("Hello");
  return this;
};

Person.prototype.goodbye = function () {
  console.log("Hello");
  return this;
};

const person1 = new Person("Russell");
const person2 = new Person("Bobby");

person1.setName("Greg");

console.log(person1.hello());
console.log(person2);
