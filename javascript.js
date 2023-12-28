// // console.log('I am calling a not yet defined function!', something());

//  var something = function () {
//    console.log('Hello World!')
//    return 'It worked!'
//  }

// //someVar = 'Hello';

// // console.log(someVar);

// var someVar = 'teddy';

// console.log(this);

// personName = 'Russell'
// personAge = 39;

// var myObj = {

//   personName : 'Russell',
//   personAge: 39,
//   getAgeAndname : function() {
//     return this.personName + ' ' + this.personAge;
//   },
// }

// console.log(process);



////////////


function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function () {
    console.log(this === window);
  },
};

user.foo(); // Prints false because now this refers to user object instead of global object.
let fun1 = user.foo1;
fun1(); // Prints true as this method is invoked as a simple function.
