const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/eTripleRDB"
)

const repairWorkOrderSeed = [
  {
    systems: [
      {
        serial: 1,
        description: 'Engine',
        subsystems: [
          {
            serial: '1A',
            description: 'Engine oil',
            status: 'Maintenance Action Required',
            maintenanceActions: [
              {
                actionTaken: 'Changed engine oil and filter',
                repairParts: [
                  {
                    type: 'Oil',
                    quantity: 10,
                    unit: 'L'
                  },
                  {
                    type: 'Oil filter',
                    quantity: 1,
                    unit: 'N/A'
                  },
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

db.RepairWorkOrder
  // .remove({})
  // .then(() => db.RepairWorkOrder.collection.insertMany(repairWorkOrderSeed))
  // .then(data => {
  //   console.log(data.result.n + " records inserted!");
  //   process.exit(0);
  // })
  .insertMany(repairWorkOrderSeed)
  .then(() => {
    console.log(repairWorkOrderSeed.length + " RepairWorkOrder records inserted!")
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })