const router = require('express').Router()
const vehiclesController = require('../../controllers/vehiclesController')

router.route('/')
  .get(vehiclesController.findAll)
  .post(vehiclesController.create)

// TODO: Figure out how to implement API routes
router.route('/api/vehicles')
  .get(vehiclesController.findAll)

// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove)

module.exports = router;
