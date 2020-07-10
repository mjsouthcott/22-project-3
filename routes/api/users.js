const router = require('express').Router()
const usersController = require('../../controllers/usersController')

router.route('/')
  .get(usersController.findAll)
  .post(usersController.create)

// TODO: Add additional routes

// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove)

module.exports = router;
