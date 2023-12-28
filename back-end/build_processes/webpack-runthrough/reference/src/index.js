import "./styles/index.css";
import "./images/cat.png";

const me = {
  name: 'james',
  age: 40
};

const teacher = {
  ...me,
  teacher: true,
}

class Test {
  #privateField=2
}

console.log('me', me);
console.log('teacherd', teacher);

const test = new Test();
console.log(test)