//Get Mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017", {
  // 127.0.0.1 on newer node
  useNewUrlParser: false,
});

//Check Mongoose
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Mongoose Connection Success");
});

//Create a schema
var dogSchema = new mongoose.Schema({
  name: String,
  destination: String,
  height: String,
  expensive: Boolean,
});

dogSchema.methods.speak = function () {
  var greeting = this.name ? "name is " + this.name : "No name";
  console.log(greeting);
  return "worked";
};

//Create a model
const Dog = mongoose.model("Dog", dogSchema);

//Add data to model
var roland = new Dog({ name: "Roland" });

var chip = new Dog({ name: "Chip" });
//fluffy.speak();

//Submit model
roland.save(function (err, item) {
  if (err) return console.error(err);
  item.speak();
});

//Submit model
chip.save(function (err, item) {
  if (err) return console.error(err);
  //   item.speak();
});

//Find
Dog.find(function (err, items) {
  if (err) return console.error(err);
  //console.log(items);
});

//Find fluffy
Dog.find({ name: /^Roland/ }, function (err, results) {
  if (err) return console.error(err);
  console.log(results);
});

Dog.remove(function (err, item) {
  if (err) return console.error(err);
  console.log(item);
});
