const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/eTripleRDB"
)

const counterSeed = [
  {
    name: 'Number',
    count: 4
  }
]

db.Counter
  .insertMany(counterSeed)
  .then(() => {
    console.log(counterSeed.length + " Counter records inserted!")
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })