function mayTakeAWhile(theCallBack) {
  setTimeout(() => {
    theCallBack("I was delayed!");
  }, 2000);
}

function theCallBack(result) {
  console.log(result);
}

console.log(mayTakeAWhile(theCallBack));

myNewArray.forEach(function () {});
