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
    available: false,
    mounted: true,
    username: 'matthewsouthcott',
    password: 'password',
  },
  {
    role: 'Operations Manager',
    rank: 'Captain',
    firstName: 'Max',
    lastName: 'Guo',
    occupation: 'Armoured Officer',
    available: false,
    mounted: true,
    username: 'maxguo',
    password: 'password',
  },
  {
    role: 'Operator',
    rank: 'Private',
    firstName: 'Mathieu',
    lastName: 'Leblanc',
    occupation: 'Gunner',
    available: false,
    mounted: true,
    username: 'mathieuleblanc',
    password: 'password',
  },
  {
    role: 'Operator',
    rank: 'Corporal',
    firstName: 'James',
    lastName: 'Smith',
    occupation: 'Military Police Officer',
    available: false,
    mounted: true,
    username: 'jamessmith',
    password: 'password',
  },
  {
    role: 'Operator',
    rank: 'Sergeant',
    firstName: 'John',
    lastName: 'Brown',
    occupation: 'Combat Engineer',
    available: false,
    mounted: true,
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
    mounted: true,
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
    mounted: true,
    username: 'christinemartin',
    password: 'password',
  },
  {
    role: 'Technician',
    rank: 'Sergeant',
    firstName: 'Stephane',
    lastName: 'Roy',
    occupation: 'Vehicle Technician',
    mounted: true,
    username: 'stephaneroy',
    password: 'password',
  },
  {
    role: 'Operator',
    rank: 'Master Corporal',
    firstName: 'Robert',
    lastName: 'Wilson',
    occupation: 'Infantry Soldier',
    username: 'robertwilson',
    password: 'password',
  },
  {
    role: 'Operator',
    rank: 'Sergeant',
    firstName: 'David',
    lastName: 'MacDonald',
    occupation: 'Mobile Support Equipment Operator',
    username: 'davidmacdonald',
    password: 'password',
  },
  {
    role: 'Operator',
    rank: 'Corporal',
    firstName: 'Francois',
    lastName: 'Gagnon',
    occupation: 'Supply Technician',
    username: 'francoisgagnon',
    password: 'password',
  },
  {
    role: 'Technician',
    rank: 'Craftsman',
    firstName: 'Sarah',
    lastName: 'Johnson',
    occupation: 'Materials Technician',
    username: 'sarahjohnson',
    password: 'password',
  },
  {
    role: 'Technician',
    rank: 'Corporal',
    firstName: 'Mark',
    lastName: 'Taylor',
    occupation: 'Vehicle Technician',
    username: 'marktaylor',
    password: 'password',
  },
  {
    role: 'Technician',
    rank: 'Corporal',
    firstName: 'Guy',
    lastName: 'Cote',
    occupation: 'Weapons Technician',
    username: 'guycote',
    password: 'password',
  },
  
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