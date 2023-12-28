class Hello extends Object {
  constructor(name) {
    super();

    this.name = name;
  }

  sayHi = () => {
    console.log("Hi ", this.name);
  };
}

const _myInstance = new Hello("Bobby");

console.log(_myInstance.sayHi());
