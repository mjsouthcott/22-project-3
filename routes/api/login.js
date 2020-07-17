const router = require('express').Router()
const loginController = require('../../controllers/loginController')

/*  Login
    /
        POST
*/

router
  .route("/:username")
  .post(loginController.authenticate);

module.exports = router;
