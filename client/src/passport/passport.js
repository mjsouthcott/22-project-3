const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../../models/user");

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});
passport.deserializeUser(function(id, cb) {
  User.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
  });
});


// Local Strategy
passport.use(
  new LocalStrategy(
    // { usernameField: "username" },
    (username, password, done) => {
      // Match User
      User.findOne({ username: username })
        .then((user) => {
          if (!user) {
            return done(null, false, {
              message: "Incorrect username.",
            });
          } else {
            // Match password
            // bcrypt.compare(password, user.password, (err, isMatch) => {
            //   if (err) throw err;
            //   if (isMatch) {
            //     return done(null, user);
            //   } else {
            //     return done(null, false, { message: "Wrong password" });
            //   }
            // });


            //just for now
            if(password == user.password){
              return done(null, user);
            } else {
              return done(null, false, { message: "Wrong password" })
            }

          }
        })
        .catch((err) => {
          return done(null, false, { message: err });
        });
    }
  )
);
module.exports = passport;