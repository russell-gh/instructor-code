function makeFunc() {
  var name = "Hi";

  function getName() {
    return name;
  }

  function setName(newName) {
    name = newName;
  }

  return [getName, setName];
}

const [get, set] = makeFunc();

console.log(get());

set("bob");

console.log(get());
