const router = require('express').Router()
const countersController = require('../../controllers/countersController')

router.route('/')
  .get(countersController.findAll)
  .post(countersController.create)

// TODO: Add additional routes

// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove)

module.exports = router;
