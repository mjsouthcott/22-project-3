const router = require('express').Router()
const repairWorkOrdersController = require('../../controllers/repairWorkOrdersController')

/*  Repair Work Orders
    /
        GET
        POST
*/

router
  .route("/")
  .get(repairWorkOrdersController.findAll)
  .post(repairWorkOrdersController.create);

module.exports = router;
