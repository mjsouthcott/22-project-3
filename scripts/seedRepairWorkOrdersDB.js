const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/eTripleRDB");

const repairWorkOrderSeed = [
  {
    automotiveSystems: [
      {
        serial: 1,
        description: "Engine",
        automotiveSubsystems: [
          {
            serial: "1A",
            description: "Engine oil",
            status: "Maintenance action required",
            maintenanceActions: [
              {
                actionTaken: "Topped up engine oil",
                labourHours: 1,
                repairParts: [
                  {
                    type: "Oil",
                    quantity: 15,
                    unit: "L",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

db.RepairWorkOrder.insertMany(repairWorkOrderSeed)
  .then(() => {
    console.log(
      repairWorkOrderSeed.length + " RepairWorkOrder records inserted!"
    );
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
