function square(value) {
  return value * value;
}

function memorise(func) {
  var obj = {};

  return (value) => {
    if (obj[value]) {
      return "DONE - " + obj[value];
    } else {
      var result = func(value);
      obj[value] = result;
      return "NEW - " + result;
    }
  };
}

var optimised = memorise(square);
console.log(optimised(20));
console.log(optimised(10));
console.log(optimised(10));
console.log(optimised(40));
console.log(optimised(40));
