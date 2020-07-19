const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/eTripleRDB");

const vehicleSeed = [
  {
    role: "Maintenance Manager",
    type: "Medium Logistic Vehicle, Command Post",
    registrationNumber: "19000",
    callSign: "88A",
    iconSrc:
      "assets/images/vehicleIcons/medium-logistic-vehicle-command-post.png",
    location: {
      latitude: 45.417049,
      longitude: -75.599637,
    },
  },
  {
    role: "Operations Manager",
    type: "Main Battle Tank",
    registrationNumber: "12000",
    callSign: "39C",
    iconSrc: "assets/images/vehicleIcons/main-battle-tank.png",
  },
  {
    role: "Operator",
    type: "Medium Logistic Vehicle, Gun Tractor",
    registrationNumber: "19001",
    callSign: "71G",
    iconSrc:
      "assets/images/vehicleIcons/medium-logistic-vehicle-gun-tractor.png",
    serviceable: false,
    repairRequests: [],
  },
  {
    role: "Operator",
    type: "Armoured Patrol Vehicle",
    registrationNumber: "18000",
    callSign: "52H",
    iconSrc: "assets/images/vehicleIcons/armoured-patrol-vehicle.png",
    serviceable: false,
    repairRequests: [],
  },
  {
    role: "Operator",
    type: "Armoured Engineering Vehicle",
    registrationNumber: "16000",
    callSign: "63I",
    iconSrc: "assets/images/vehicleIcons/armoured-engineering-vehicle.png",
    serviceable: false,
    repairRequests: [],
  },
  {
    role: "Technician",
    type: "Medium Logistic Vehicle, Mobile Repair Team",
    registrationNumber: "19002",
    callSign: "88E1",
    iconSrc:
      "assets/images/vehicleIcons/medium-logistic-vehicle-mobile-repair-team.png",
  },
  {
    role: "Technician",
    type: "Medium Logistic Vehicle, Mobile Repair Team",
    registrationNumber: "19003",
    callSign: "88W2",
    iconSrc:
      "assets/images/vehicleIcons/medium-logistic-vehicle-mobile-repair-team.png",
  },
  {
    role: "Technician",
    type: "Armoured Recovery Vehicle",
    registrationNumber: "15000",
    callSign: "88R1",
    iconSrc: "assets/images/vehicleIcons/armoured-recovery-vehicle.png",
  },
  {
    role: "Operator",
    type: "Infantry Fighting Vehicle",
    registrationNumber: "14000",
    callSign: "12D",
    iconSrc: "assets/images/vehicleIcons/infantry-fighting-vehicle.png",
    serviceable: false,
    repairRequests: [],
  },
  {
    role: "Operator",
    type: "Heavy Logistic Vehicle, Refueller",
    registrationNumber: "11000",
    callSign: "81R",
    iconSrc: "assets/images/vehicleIcons/heavy-logistic-vehicle-refueller.png",
  },
  {
    role: "Operator",
    type: "Medium Logistic Vehicle, Cargo",
    registrationNumber: "19004",
    callSign: "82C",
    iconSrc: "assets/images/vehicleIcons/medium-logistic-vehicle-cargo.png",
  },
  {
    role: "Technician",
    type: "Medium Logistic Vehicle, Mobile Repair Team",
    registrationNumber: "19005",
    callSign: "88M",
    iconSrc:
      "assets/images/vehicleIcons/medium-logistic-vehicle-mobile-repair-team.png",
  },
  {
    role: "Technician",
    type: "Medium Logistic Vehicle, Mobile Repair Team",
    registrationNumber: "19006",
    callSign: "88V1",
    iconSrc:
      "assets/images/vehicleIcons/medium-logistic-vehicle-mobile-repair-team.png",
  },
  {
    role: "Technician",
    type: "Medium Logistic Vehicle, Mobile Repair Team",
    registrationNumber: "19007",
    callSign: "88W1",
    iconSrc:
      "assets/images/vehicleIcons/medium-logistic-vehicle-mobile-repair-team.png",
  },
];

db.User.find()
  .sort({ createdAt: 1 })
  .then((users) => {
    for (let i = 0; i < 9; i++) {
      vehicleSeed[i].occupant = users[i]._id;
    }
    return vehicleSeed;
  })
  .then((vehicleSeed) => {
    db.RepairRequest.find()
      .sort({ number: 1 })
      .then((repairRequests) => {
        vehicleSeed[2].repairRequests.push(repairRequests[0]._id);
        vehicleSeed[3].repairRequests.push(repairRequests[1]._id);
        vehicleSeed[4].repairRequests.push(repairRequests[2]._id);
        vehicleSeed[8].repairRequests.push(repairRequests[3]._id);
        return vehicleSeed;
      })
      .then((vehicleSeed) => {
        db.Vehicle.insertMany(vehicleSeed)
          .then(() => {
            console.log(vehicleSeed.length + " Vehicle records inserted!");
            process.exit(0);
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
          .catch((err) => {
            console.error(err);
            process.exit(1);
          });
      });
  });
