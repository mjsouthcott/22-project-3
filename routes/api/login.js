const express = require("express");
const router = express.Router()
const passport = require("../../client/src/passport/passport")



/*  Login
    /
        POST
*/



router
  .route("/:username")
  .post(
    passport.authenticate('local'),
    function (req, res) {
      res.json(req.user);

    })


module.exports = router;