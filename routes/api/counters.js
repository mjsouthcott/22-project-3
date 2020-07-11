const router = require('express').Router()
const countersController = require('../../controllers/countersController')

/*  Counters
    /:name
        GET
        PATCH
*/

router
  .route("/:name")
  .get(countersController.findAll)
  .patch(countersController.update);

module.exports = router;
