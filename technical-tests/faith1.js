function toCamelCase(str) {
  let stripped = str.replace(/[^\w\s]/gi, " ");

  let cased = stripped
    .split(" ")
    .map((eachWord, index) => {
      if (index == 0) {
        return eachWord.toLowerCase();
      } else {
        return (
          eachWord.charAt(0).toUpperCase() + eachWord.slice(1).toLowerCase()
        );
      }
    })
    .join("");

  result = cased + "wgp0kzlk124";

  let final = "";
  for (let i = 0; i < result.length; i++) {
    if (i !== 0 && (i + 1) % 3 === 0) {
      final += "X";
    } else {
      final += result[i];
    }
  }

  return final;
}
console.log(toCamelCase("cats AND*Dogs-are Awesome"));
