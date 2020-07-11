const router = require('express').Router()
const vehiclesController = require('../../controllers/vehiclesController')

/*  Vehicles
    /
        GET
        POST
    
    /:id
        GET
        PATCH
    
    /:occupant
        GET
*/

router
  .route("/")
  .get(vehiclesController.findAll)
  .post(vehiclesController.create);

router
  .route("/:id")
  .get(vehiclesController.findById)
  .patch(vehiclesController.updateById);

router.route("/:occupant").get(vehiclesController.findAll);

module.exports = router;
