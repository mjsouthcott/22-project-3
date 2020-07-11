const router = require('express').Router()
const userRoutes = require('./users')
const vehicleRoutes = require('./vehicles')
const repairRequestRoutes = require('./repairRequests')
const repairWorkOrderRoutes = require('./repairWorkOrders')

router.use('/users', userRoutes)
router.use('/vehicles', vehicleRoutes)
router.use('/repair-requests', repairRequestRoutes)
router.use('/repair-work-orders', repairWorkOrderRoutes)

module.exports = router;
