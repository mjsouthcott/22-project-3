const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/eTripleRDB"
)

let repairRequestSeed = [
  {
    // Medium Logistic Vehicle, Gun Tractor
    number: 1,
    estimatedConditionClass: 'Close Support',
    vehicleCanBeMovedBy: 'Suspended Tow',
    localTacticalSituation: 'Hostile',
    crewRemainedWithVehicle: false,
    location: {
      latitude: 45.4801785,
      longitude: -75.472925
    },
    status: 'Work In Progress',
  },
  {
    // Armoured Patrol Vehicle
    number: 2,
    estimatedConditionClass: 'Integral',
    vehicleCanBeMovedBy: 'Drivable',
    localTacticalSituation: 'Safe',
    crewRemainedWithVehicle: true,
    location: {
      latitude: 45.489154,
      longitude: -75.477379
    },
    status: 'Work In Progress',
  },
  {
    // Armoured Engineering Vehicle
    number: 3,
    estimatedConditionClass: 'Depot',
    vehicleCanBeMovedBy: 'Straight Pull',
    localTacticalSituation: 'Hostile',
    crewRemainedWithVehicle: true,
    location: {
      latitude: 45.482142,
      longitude: -75.475700
    },
    status: 'Open',
  }
]

db.User
  .find({ role: 'Technician' })
  .sort({ firstName: 1 })
  .then(technicians => {
    repairRequestSeed[0].assignedTo = technicians[0]._id
    repairRequestSeed[1].assignedTo = technicians[1]._id
    return repairRequestSeed
  })
  .then(repairRequestSeed => {
    db.RepairRequest
      .insertMany(repairRequestSeed)
      .then(() => {
        console.log(repairRequestSeed.length + " RepairRequest records inserted!")
        process.exit(0)
        // db.RepairRequest
        //   .find({ assignedTo: { $exists: true } })
        //   .sort({ number: 1 })
        //   .populate('assignedTo')
        //   .then(data => {
        //     console.log(data)
        //     process.exit(0)
        //   })
      })
      .catch(err => {
        console.error(err)
        process.exit(1)
      })
    }
  )