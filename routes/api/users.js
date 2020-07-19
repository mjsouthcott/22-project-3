const router = require("express").Router();
const usersController = require("../../controllers/usersController");

/*  Users
    /
        GET
        POST
    
    /:id
        GET
        PATCH

    /:role
        GET

    /:role&:dismounted
        GET

    /:role&:available
        GET
*/

router.route("/").get(usersController.findAll).post(usersController.create);

router
  .route("/:id")
  .get(usersController.findById)
  .patch(usersController.updateById);

router.route("/:role").get(usersController.findAll);

router.route("/:role&:dismounted").get(usersController.findAll);

router.route("/:role&:available").get(usersController.findAll);

module.exports = router;
