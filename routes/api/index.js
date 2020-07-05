const router = require('express').Router()
const userRoutes = require('./users')
const vehicleRoutes = require('./vehicles')

router.use('/users', userRoutes)
router.use('/vehicles', vehicleRoutes)

module.exports = router;
