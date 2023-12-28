function SuperArray() {}
SuperArray.prototype = Object.create(Array.prototype);
SuperArray.prototype.constructor = SuperArray;

SuperArray.prototype.myCoolNewFunction = function () {
  console.log("I am super!");
};

SuperArray.prototype.myCoolNewFunction();
