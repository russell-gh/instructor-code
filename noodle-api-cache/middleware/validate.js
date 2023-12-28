validateFunc = (req, res, next) => {
  //defensive check to ensure url exists and is of correct length

  //no url so assume homepage visit
  if (!("url" in req.query)) {
    res.sendFile(__dirname + "/docs/index.html");
    return;
  }

  //url but not long enough, send error and docs
  if (!("url" in req.query) || req.query.url.length < 15) {
    res.send(
      "Error: URL is too short. Check the docs https://noodle-api-cache.herokuapp.com"
    );
    return;
  }
  next();
};

module.exports = validateFunc;
