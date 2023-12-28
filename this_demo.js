globalThis.name = "AJ";

function getFuncName() {
  console.log(this.name);
  setTimeout(function () {
    //swap to fat arrow for auto binding
    console.log(this.name);
  }, 1000);
  return this.name;
}

const obj = {
  name: "Russell",
  getFuncName: getFuncName,
  myFunc() {
    console.log(this);
  },
};

obj.getFuncName();

// console.log(obj.getFuncName.call({ name: "Graham" }));

// const iAmBinded = getFuncName.bind({ name: "Bounded" });
// console.log(iAmBinded());

// console.log(globalThis);
