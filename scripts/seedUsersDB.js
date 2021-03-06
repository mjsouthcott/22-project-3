const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/eTripleRDB");

const userSeed = [
  {
    role: "Maintenance Manager",
    rank: "Major",
    firstName: "Matthew",
    lastName: "Southcott",
    occupation: "Electrical-Mechanical Engineering Officer",
    available: false,
    mounted: true,
    username: "matthewsouthcott",
    password: "$2a$10$2qA52ddQdlFTASWwUQJAQ.gPZxv.BrxjQFvP17ODvXe9hQmxv6D9u",
  },
  {
    role: "Operations Manager",
    rank: "Captain",
    firstName: "Max",
    lastName: "Guo",
    occupation: "Armoured Officer",
    available: false,
    mounted: true,
    username: "maxguo",
    password: "$2a$10$zAZhQrT./B5P2eacqKdK5OD8xWD4G4145PBGwIe8HUbXjG0sX8S/S",
  },
  {
    role: "Operator",
    rank: "Private",
    firstName: "Mathieu",
    lastName: "Leblanc",
    occupation: "Gunner",
    available: false,
    mounted: true,
    username: "mathieuleblanc",
    password: "$2a$10$CifTm8GeyHNYIIduHy9Ps.cbeD1WwJcanh9bPqJp4LvlWFn6Dk8vC",
  },
  {
    role: "Operator",
    rank: "Corporal",
    firstName: "James",
    lastName: "Smith",
    occupation: "Military Police Officer",
    available: false,
    mounted: true,
    username: "jamessmith",
    password: "$2a$10$zrIE3Fd7surVZNLDhwyAl.VTc50Yp0FmEE9jwDiKitoetVZsq2Yc.",
  },
  {
    role: "Operator",
    rank: "Sergeant",
    firstName: "John",
    lastName: "Brown",
    occupation: "Combat Engineer",
    available: false,
    mounted: true,
    username: "johnbrown",
    password: "$2a$10$2qA52ddQdlFTASWwUQJAQ.gPZxv.BrxjQFvP17ODvXe9hQmxv6D9u",
  },
  {
    role: "Technician",
    rank: "Craftsman",
    firstName: "Daniel",
    lastName: "Tremblay",
    occupation: "Electronic-Optronic Technician",
    mounted: true,
    username: "danieltremblay",
    password: "$2a$10$CifTm8GeyHNYIIduHy9Ps.cbeD1WwJcanh9bPqJp4LvlWFn6Dk8vC",
  },
  {
    role: "Technician",
    rank: "Master Corporal",
    firstName: "Christine",
    lastName: "Martin",
    occupation: "Weapons Technician",
    mounted: true,
    username: "christinemartin",
    password: "$2a$10$zrIE3Fd7surVZNLDhwyAl.VTc50Yp0FmEE9jwDiKitoetVZsq2Yc.",
  },
  {
    role: "Technician",
    rank: "Sergeant",
    firstName: "Stephane",
    lastName: "Roy",
    occupation: "Vehicle Technician",
    mounted: true,
    username: "stephaneroy",
    password: "$2a$10$CifTm8GeyHNYIIduHy9Ps.cbeD1WwJcanh9bPqJp4LvlWFn6Dk8vC",
  },
  {
    role: "Operator",
    rank: "Master Corporal",
    firstName: "Robert",
    lastName: "Wilson",
    occupation: "Infantry Soldier",
    available: false,
    mounted: true,
    username: "robertwilson",
    password: "$2a$10$zAZhQrT./B5P2eacqKdK5OD8xWD4G4145PBGwIe8HUbXjG0sX8S/S",
  },
  {
    role: "Operator",
    rank: "Sergeant",
    firstName: "David",
    lastName: "MacDonald",
    occupation: "Mobile Support Equipment Operator",
    username: "davidmacdonald",
    password: "$2a$10$CifTm8GeyHNYIIduHy9Ps.cbeD1WwJcanh9bPqJp4LvlWFn6Dk8vC",
  },
  {
    role: "Operator",
    rank: "Corporal",
    firstName: "Francois",
    lastName: "Gagnon",
    occupation: "Supply Technician",
    username: "francoisgagnon",
    password: "$2a$10$2qA52ddQdlFTASWwUQJAQ.gPZxv.BrxjQFvP17ODvXe9hQmxv6D9u",
  },
  {
    role: "Technician",
    rank: "Craftsman",
    firstName: "Sarah",
    lastName: "Johnson",
    occupation: "Materials Technician",
    username: "sarahjohnson",
    password: "$2a$10$CifTm8GeyHNYIIduHy9Ps.cbeD1WwJcanh9bPqJp4LvlWFn6Dk8vC",
  },
  {
    role: "Technician",
    rank: "Corporal",
    firstName: "Mark",
    lastName: "Taylor",
    occupation: "Vehicle Technician",
    username: "marktaylor",
    password: "$2a$10$zrIE3Fd7surVZNLDhwyAl.VTc50Yp0FmEE9jwDiKitoetVZsq2Yc.",
  },
  {
    role: "Technician",
    rank: "Corporal",
    firstName: "Guy",
    lastName: "Cote",
    occupation: "Weapons Technician",
    username: "guycote",
    password: "$2a$10$CifTm8GeyHNYIIduHy9Ps.cbeD1WwJcanh9bPqJp4LvlWFn6Dk8vC",
  },
];

db.User.insertMany(userSeed)
  .then(() => {
    console.log(userSeed.length + " User records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
