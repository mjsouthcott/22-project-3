const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
  role: { type: String, required: true },
  rank: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  occupation: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: String, required: true },
})

const User = mongoose.model("User", userSchema)

module.exports = User