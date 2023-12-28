for (let i = 0; i < 50; i++) {
  console.log(Math.round(Math.random() * 10));
}

const close = ["hello", "bye", "bye", "good", "bye2", "bye2"];

console.log(close);

for (let i = 0; i < close.length; i++) {
  if (close[i] === close[i + 1]) {
    close.push(close.splice(i, 1)[0]);
    // i--;
  }
}

console.log(close);
