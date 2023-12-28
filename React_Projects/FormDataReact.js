const formSubmit = (event) => {
  event.preventDefault();
  var data = new FormData(event.target);
  let formObject = Object.fromEntries(data.entries());
  console.log(formObject);
};
