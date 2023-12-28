var Twitter = require("twitter");

var client = new Twitter({
  consumer_key: "h0EsBNL24VDf7Y8VwNm1RE9oa",
  consumer_secret: "MZXdpMS3OGIFG1ji2RAoBCyWJMQYmAlZNDrw54h4ZBkxektIXE",
  bearer_token:
    "AAAAAAAAAAAAAAAAAAAAACggJQEAAAAA4pPVuGjnPArJEU3P4GUtL1TiOZg%3DPcauZyg6diJy27qVV700MZf2dWY8RZ0wDVP6mjKLS2lg4NoxeU",
});

var params = { screen_name: "Snowden" };
var params = { q: "#bitcoin" };
client.get(
  //"statuses/user_timeline",
  "search/tweets.json",
  params,
  function (error, tweets, response) {
    if (!error) {
      console.log(tweets);
    } else {
      //console.log(error);
    }
  }
);

// var stream = client.stream("statuses/filter", { track: "javascript" });
// stream.on("data", function (event) {
//   console.log(event && event.text);
// });

// stream.on("error", function (error) {
//   throw error;
// });

// // You can also get the stream in a callback if you prefer.
// client.stream("statuses/filter", { track: "javascript" }, function (stream) {
//   stream.on("data", function (event) {
//     console.log(event && event.text);
//   });

//   stream.on("error", function (error) {
//     throw error;
//   });
// });
