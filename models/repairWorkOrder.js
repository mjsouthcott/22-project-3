const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Repair work order schema
const repairWorkOrderSchema = new Schema(
  {
    automotiveSystems: {
      type: [
        {
          serial: {
            type: Number,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          automotiveSubsystems: {
            type: [
              {
                serial: {
                  type: String,
                  required: true,
                },
                description: {
                  type: String,
                  required: true,
                },
                status: {
                  type: String,
                  enum: [
                    "Serviceable",
                    "Not applicable",
                    "Operator action required",
                    "Maintenance action required",
                  ],
                  required: true,
                },
                maintenanceActions: {
                  type: [
                    {
                      actionTaken: {
                        type: String,
                        minlength: 2,
                        maxlength: 255,
                        trim: true,
                        required: true,
                      },
                      labourHours: {
                        type: Number,
                        required: true,
                      },
                      repairParts: {
                        type: [
                          {
                            type: {
                              type: String,
                              minlength: 2,
                              maxlength: 100,
                              trim: true,
                              required: true,
                            },
                            quantity: {
                              type: Number,
                              required: true,
                            },
                            unit: {
                              type: String,
                              enum: ["N/A", "L", "m"],
                              required: true,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    // completedBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    // },
    // approvedBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    // },
  },
  {
    timestamps: true,
  }
);

const RepairWorkOrder = mongoose.model(
  "RepairWorkOrder",
  repairWorkOrderSchema
);

module.exports = RepairWorkOrder;
