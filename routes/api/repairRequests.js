const router = require('express').Router()
const repairRequestsController = require('../../controllers/repairRequestsController')

/*  Repair Requests
    /
        GET
        POST
    
    /:id
        GET
        PATCH

    /:assignedTo
        GET
*/

router
  .route("/")
  .get(repairRequestsController.findAll)
  .post(repairRequestsController.create);

router
  .route("/:id")
  .get(repairRequestsController.findById)
  .patch(repairRequestsController.updateById);

router.route("/:assignedTo").get(repairRequestsController.findAll);

module.exports = router;
