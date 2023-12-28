{
  let now = Date.now();
  for (let i = 0; i < 999999999; i++) {
    function test() {
      //
    }
    test();
  }
  console.log(Date.now() - now);
}

{
  let now = Date.now();
  for (let i = 0; i < 999999999; i++) {
    const test = function () {
      //
    };
    test();
  }
  console.log(Date.now() - now);
}
