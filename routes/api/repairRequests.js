const router = require('express').Router()
const repairRequestsController = require('../../controllers/repairRequestsController')

router.route('/')
  .get(repairRequestsController.findAll)
  .post(repairRequestsController.create)

// TODO: Add additional routes

// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove)

module.exports = router;
