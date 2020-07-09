const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/eTripleRDB"
)

const repairRequestSeed = [
  {
    // Medium Logistic Vehicle, Gun Tractor
    estimatedConditionClass: 'Close Support',
    vehicleCanBeMovedBy: 'Suspended Tow',
    localTacticalSituation: 'Hostile',
    crewRemainedWithVehicle: false,
    location: {
      latitude: 45.4801785,
      longitude: -75.472925
    }
  },
  {
    // Armoured Patrol Vehicle
    estimatedConditionClass: 'Integral',
    vehicleCanBeMovedBy: 'Drivable',
    localTacticalSituation: 'Safe',
    crewRemainedWithVehicle: true,
    location: {
      latitude: 45.489154,
      longitude: -75.477379
    }
  },
  {
    // Armoured Engineering Vehicle
    estimatedConditionClass: 'Depot',
    vehicleCanBeMovedBy: 'Straight Pull',
    localTacticalSituation: 'Hostile',
    crewRemainedWithVehicle: true,
    location: {
      latitude: 45.482142,
      longitude: -75.475700
    }
  },
]

db.RepairRequest
  .insertMany(repairRequestSeed)
  .then(() => {
    console.log(repairRequestSeed.length + " RepairRequest records inserted!")
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })