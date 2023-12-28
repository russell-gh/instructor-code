const myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("hello");
  }, 700); //random * 1000
  console.log("After!");
});

myPromise
  .then(function (something) {
    console.log(something);
  })
  .catch(function (error) {
    console.log("error", error);
  });

console.log(">>>>>>>", myPromise);
