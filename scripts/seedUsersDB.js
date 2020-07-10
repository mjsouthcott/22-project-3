const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/eTripleRDB"
)

const userSeed = [
  {
    role: 'Maintenance Manager',
    rank: 'Major',
    firstName: 'Matthew',
    lastName: 'Southcott',
    occupation: 'Electrical-Mechanical Engineering Officer',
    dismounted: false,
    username: 'matthewsouthcott',
    password: 'password',
  },
  {
    role: 'Operations Manager',
    rank: 'Captain',
    firstName: 'Max',
    lastName: 'Guo',
    occupation: 'Armoured Officer',
    dismounted: false,
    username: 'maxguo',
    password: 'password',
  },
  {
    role: 'Operator',
    rank: 'Private',
    firstName: 'Mathieu',
    lastName: 'Leblanc',
    occupation: 'Gunner',
    dismounted: false,
    username: 'mathieuleblanc',
    password: 'password',
  },
  {
    role: 'Operator',
    rank: 'Corporal',
    firstName: 'James',
    lastName: 'Smith',
    occupation: 'Military Police Officer',
    dismounted: false,
    username: 'jamessmith',
    password: 'password',
  },
  {
    role: 'Operator',
    rank: 'Sergeant',
    firstName: 'John',
    lastName: 'Brown',
    occupation: 'Combat Engineer',
    dismounted: false,
    username: 'johnbrown',
    password: 'password',
  },
  {
    role: 'Technician',
    rank: 'Craftsman',
    firstName: 'Daniel',
    lastName: 'Tremblay',
    occupation: 'Electronic-Optronic Technician',
    available: false,
    dismounted: false,
    username: 'danieltremblay',
    password: 'password',
  },
  {
    role: 'Technician',
    rank: 'Master Corporal',
    firstName: 'Christine',
    lastName: 'Martin',
    occupation: 'Weapons Technician',
    available: false,
    dismounted: false,
    username: 'christinemartin',
    password: 'password',
  },
  {
    role: 'Technician',
    rank: 'Sergeant',
    firstName: 'Stephane',
    lastName: 'Roy',
    occupation: 'Vehicle Technician',
    dismounted: false,
    username: 'stephaneroy',
    password: 'password',
  }
]

db.User
  .insertMany(userSeed)
  .then(() => {
    console.log(userSeed.length + " User records inserted!")
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })