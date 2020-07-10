const router = require('express').Router()
const repairWorkOrdersController = require('../../controllers/repairWorkOrdersController')

router.route('/')
  .get(repairWorkOrdersController.findAll)
  .post(repairWorkOrdersController.create)

// TODO: Add additional routes

// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove)

module.exports = router;
