class Person {
  constructor(personName) {
    this.personName = personName;
  }

  sayName() {
    return this.personName + this.animalName;
  }

  someRandomFunction(x, y) {
    return x + y;
  }
}

// const person = new Person("Russell");

// person.sayName();

class Animal extends Person {
  constructor(animalName) {
    super("Russell");
    this.animalName = animalName;
  }

  sayAName() {
    return this.animalName;
  }

  //   calcAgeNextYear(x, y) {
  //     return x + y;
  //   }
}

const animal = new Animal("Spot");
console.log(
  animal.someRandomFunction(10, 1),
  animal.sayName(),
  animal.sayAName()
);

(function () {
  function Snake(name) {
    // super class
    let sound = "Hiss"; // private variable
    this.name = name; // public property (this is the object created, of type 'Snake')
    this.getSound = function () {
      // privileged method (goes on each object, can see private vars)
      return sound;
    };
  }

  Snake.getAgeInSnakeYears = function (age) {
    // Static method (useful methods to be used with that type/class of thing, e.g. Array.from() or Array.isArray())
    return age * 13;
  };

  Snake.prototype.speak = function () {
    // shared public method (aka 'instance method') - all objects produced have access
    console.log(`${this.name} says ${this.getSound()}`);
  };

  // SUB-CLASS INHERITANCE
  function Constrictor(name, coils) {
    // sub class
    // Snake.call(this, ...arguments);
    Snake.call(this, name);
    this.coils = coils;
  }
  // Constrictor.prototype = new Snake();
  Constrictor.prototype = Object.create(Snake.prototype); // Better way
  Constrictor.prototype.constructor = Constrictor;

  Constrictor.prototype.constrict = function () {
    console.log("The " + this.name.toLowerCase() + " squeezes you to death!");
  };

  function Venomous(name) {
    // sub class
    // Snake.call(this, ...arguments);
    Snake.call(this, name);
  }
  // Constrictor.prototype = new Snake();
  Venomous.prototype = Object.create(Snake.prototype); // Better way
  Venomous.prototype.constructor = Venomous;

  Venomous.prototype.invenomate = function () {
    return (
      "The " + this.name.toLowerCase() + " bites you and the venom kills you!"
    );
  };

  const python = new Constrictor("python", 8);
  console.log("python", python);

  const cobra = new Venomous("cobra", 8);
  console.log("cobra", cobra);

  console.log(
    "From the base class both can 'speak' using a shared method and shared private variable"
  );
  python.speak();
  cobra.speak();

  console.log("They have access to their sub-class methods: \n");
  //   python.constrict();

  //   cobra.invenomate();

  console.log("...but not to each others: \n");
  try {
    console.log(python.name + " invenomating: \n");
    python.invenomate();
  } catch (e) {
    console.log("A python cannot invenomate\n", e);
  }

  try {
    console.log(cobra.name + " constricting: \n");
    cobra.constrict();
  } catch (err) {
    console.log("A cobra cannot constrict\n", err);
  }
})();

class MyClass {
  #privateValue = "private"; // <-- not visible except to methods of this class

  hmmm() {
    return this.#privateValue;
  }
}

var a = new MyClass();

console.log(a.hmmm());
