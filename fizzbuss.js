for (var i = 1; i < 20; i++) {
  if (i % 3 != 0 && i % 5 != 0) {
    console.log(i);
  }
  if (i % 3 == 0 && i % 5 != 0) {
    console.log("Fizz");
  }
  if (i % 3 != 0 && i % 5 == 0) {
    console.log("Buzz");
  }
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  }
}

for (var i = 1; i < 51; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

for (var i = 1; i < 51; i++) {
  var result = "";

  if (i % 3 == 0) {
    result += "Fizz";
  }
  if (i % 5 == 0) {
    result += "Buzz";
  }

  console.log(result || i);
}

// for (var i = 1; i < 51; i++) {
//   var result = "";

//   result += i % 3 == 0 ? "Fizz" : "";

//   result += i % 5 == 0 ? "Buzz" : "";

//   console.log(result || i);
// }

for (let i = 0; i < 100; )
  console.log((++i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);

///////////////////
//as sent
// for (var i = 1; i < 20; i++) {
//   if (i % 3 != 0 && i % 5 != 0) {
//     console.log(i);
//   }
//   if (i % 3 == 0 && i % 5 != 0) {
//     console.log("Fizz");
//   }
//   if (i % 3 != 0 && i % 5 == 0) {
//     console.log("Buzz");
//   }
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   }
// }

// for (var i = 1; i < 101; i++) {
//   if (i % 15 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// for (var i = 1; i < 101; i++) {
//   let result = "";
//   if (i % 3 == 0) {
//     result += "Fizz";
//   }
//   if (i % 5 == 0) {
//     result += "Buzz";
//   }

//   console.log(result || i);
// }

// for (var i = 1; i < 101; i++) {
//   let result = "";

//   result += i % 3 == 0 ? "Fizz" : "";

//   result += i % 5 == 0 ? "Buzz" : "";

//   console.log(result || i);
// }

// for (let i = 0; i < 100; )
//   console.log((++i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);
