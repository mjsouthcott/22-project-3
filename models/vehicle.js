const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vehicleSchema = new Schema({
  type: { type: String, required: true },
  configurationCode: { type: String, required: true },
  registrationNumber: { type: String, required: true },
  callSign: { type: String, required: true },
  status: { type: String, required: true },
  icon: { type: String, required: true },

  // TODO: Validate data types
  occupant: { type: Object, default: undefined },
  location: { type: Object, default: undefined },
  repairRequests: { type: Array, default: undefined }
})

const Vehicle = mongoose.model("Vehicle", vehicleSchema)

module.exports = Vehicle