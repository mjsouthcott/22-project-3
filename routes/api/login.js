const express = require("express");
const router = express.Router();
const passport = require("../../client/src/passport/passport");
const usersController = require("../../controllers/usersController");

/*  Login
    /
        GET
        POST
*/

//check server session if the user is already logged in
router.route("/").get((req, res) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

//log out
router.route("/logout").get((req, res) => {
  req.logout();
  res.redirect("/");
});

// take user login info, and authenticate
router
  .route("/:username")
  .post(passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

//change password
router.route("/password").patch(usersController.updatePassword);

module.exports = router;
