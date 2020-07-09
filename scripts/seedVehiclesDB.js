const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/eTripleRDB"
)

const vehicleSeed = [
  {
    type: 'Medium Logistic Vehicle, Command Post',
    registrationNumber: '00000',
    callSign: '88A',
    iconSrc: 'assets/images/medium-logistic-vehicle-command-post.png'
  },
  {
    type: 'Main Battle Tank',
    registrationNumber: '00001',
    callSign: '39C',
    iconSrc: 'assets/images/main-battle-tank.png'
  },
  {
    type: 'Medium Logistic Vehicle, Gun Tractor',
    registrationNumber: '00002',
    callSign: '71G',
    iconSrc: 'assets/images/medium-logistic-vehicle-gun-tractor.png'
  },
  {
    type: 'Armoured Patrol Vehicle',
    registrationNumber: '00003',
    callSign: '52H',
    iconSrc: 'assets/images/armoured-patrol-vehicle.png'
  },
  {
    type: 'Armoured Engineering Vehicle',
    registrationNumber: '00005',
    callSign: '63I',
    iconSrc: 'assets/images/armoured-engineering-vehicle.png'
  },
  {
    type: 'Medium Logistic Vehicle, Mobile Repair Team',
    registrationNumber: '00006',
    callSign: '88E1',
    iconSrc: 'assets/images/medium-logistic-vehicle-mobile-repair-team.png'
  },
  {
    type: 'Medium Logistic Vehicle, Mobile Repair Team',
    registrationNumber: '00007',
    callSign: '88W2',
    iconSrc: 'assets/images/medium-logistic-vehicle-mobile-repair-team.png'
  },
  {
    type: 'Armoured Recovery Vehicle',
    registrationNumber: '00008',
    callSign: '88R1',
    iconSrc: 'assets/images/armoured-recovery-vehicle.png'
  },
]

db.Vehicle
  .insertMany(vehicleSeed)
  .then(() => {
    console.log(vehicleSeed.length + " Vehicle records inserted!")
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })