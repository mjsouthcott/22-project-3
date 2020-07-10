const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/eTripleRDB"
)

const vehicleSeed = [
  {
    type: 'Medium Logistic Vehicle, Command Post',
    registrationNumber: '19000',
    callSign: '88A',
    iconSrc: 'assets/images/medium-logistic-vehicle-command-post.png'
  },
  {
    type: 'Main Battle Tank',
    registrationNumber: '12000',
    callSign: '39C',
    iconSrc: 'assets/images/main-battle-tank.png'
  },
  {
    type: 'Medium Logistic Vehicle, Gun Tractor',
    registrationNumber: '19001',
    callSign: '71G',
    iconSrc: 'assets/images/medium-logistic-vehicle-gun-tractor.png',
    serviceable: false,
    repairRequests: []
  },
  {
    type: 'Armoured Patrol Vehicle',
    registrationNumber: '18000',
    callSign: '52H',
    iconSrc: 'assets/images/armoured-patrol-vehicle.png',
    serviceable: false,
    repairRequests: []
  },
  {
    type: 'Armoured Engineering Vehicle',
    registrationNumber: '16000',
    callSign: '63I',
    iconSrc: 'assets/images/armoured-engineering-vehicle.png',
    serviceable: false,
    repairRequests: []
  },
  {
    type: 'Medium Logistic Vehicle, Mobile Repair Team',
    registrationNumber: '19002',
    callSign: '88E1',
    iconSrc: 'assets/images/medium-logistic-vehicle-mobile-repair-team.png'
  },
  {
    type: 'Medium Logistic Vehicle, Mobile Repair Team',
    registrationNumber: '19003',
    callSign: '88W2',
    iconSrc: 'assets/images/medium-logistic-vehicle-mobile-repair-team.png'
  },
  {
    type: 'Armoured Recovery Vehicle',
    registrationNumber: '15000',
    callSign: '88R1',
    iconSrc: 'assets/images/armoured-recovery-vehicle.png'
  }
]

db.User
  .find()
  .sort({ createdAt: 1 })
  .then(users => {
    for (let i = 0; i < vehicleSeed.length; i++) {
      vehicleSeed[i].occupant = users[i]._id
    }
    return vehicleSeed
  })
  .then(vehicleSeed => {
    db.RepairRequest
      .find()
      .sort({ number: 1 })
      .then(repairRequests => {
        vehicleSeed[2].repairRequests.push(repairRequests[0]._id)
        vehicleSeed[3].repairRequests.push(repairRequests[1]._id)
        vehicleSeed[4].repairRequests.push(repairRequests[2]._id)
        return vehicleSeed
      })
      .then(vehicleSeed => {
        db.Vehicle
          .insertMany(vehicleSeed)
          .then(() => {
            console.log(vehicleSeed.length + " Vehicle records inserted!")
            process.exit(0)
            // db.Vehicle
            //   // .find({ occupant: { $exists: true } })
            //   .find()
            //   .populate('occupant')
            //   // .find({ repairRequests: { $exists: true, $not: { $size: 0 } } })
            //   .populate('repairRequests')
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
  })