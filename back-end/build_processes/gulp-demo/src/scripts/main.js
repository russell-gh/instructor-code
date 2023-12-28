
class Fields {
  // Private static field
  static #privateStaticField = 'privateStaticField';
  
  // Private instance field
  #privateField = 'privateField';
  
  // Private static method
  static #privateStaticMethod() {
       return 'privateStaticMethod';
  }
  
  // Private instance method
  #privateInstanceMethod(){
    return 'privateFieldMethod';
  }
  
  // Public static field
  static staticField = 'static field'; //set to undefined if no assignment happens

  // Public instance field
  instanceField = 'instance field';


  // Public static method
  static staticMethod() {
    return 'static method has been called.';
  }

  // Public instance method
  publicMethod() {
    return 'hello world'
  }
  
}

const instance = new Fields();
console.log(instance)
console.dir(instance);