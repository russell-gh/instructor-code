const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

passport.use(
  "local-login",
  new LocalStrategy(
    // username and password come from req.body. It's what the user submitted

    function (username, password, done) {
      // User.findOne({ username: username }, function(err, user) {
      //   if (err) { return done(err); }
      //   if (!user) {
      //     return done(null, false, { message: 'Incorrect username.' });
      //   }
      //   if (!user.validPassword(password)) {
      //     return done(null, false, { message: 'Incorrect password.' }); // Not best practice
      //   }
      //   return done(null, user);
      // });
    }
  )
);
