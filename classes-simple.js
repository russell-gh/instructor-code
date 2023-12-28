class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

class Colour extends Model {
  constructor(brand, mod, colour) {
    super(brand, mod);
    this.colour = colour;
  }
  show2() {
    return this.show() + " color " + this.colour;
  }
}

let myCar = new Colour("Ford", "Mustang", "Blue");
console.log(myCar.present());
