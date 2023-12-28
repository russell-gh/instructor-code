class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    return this.name + Person.count;
  }

  setName(name) {
    this.name = name;
  }

  static count = 0;
}

const _instanceOfPerson = new Person("Tommy");
const _instanceOfPerson2 = new Person("Tony");

console.log(_instanceOfPerson.sayName());

_instanceOfPerson.setName("Russell");
Person.count += 1;
console.log(Person.count);
