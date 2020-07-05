const router = require('express').Router()
const vehiclesController = require('../../controllers/vehiclesController')

router.route('/')
  .get(vehiclesController.findAll)
  .post(vehiclesController.create)

// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove)

module.exports = router;
