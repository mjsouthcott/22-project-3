const mongoose = require('mongoose')
const mongooseHidden = require('mongoose-hidden')()
const Schema = mongoose.Schema

const userSchema = new Schema ({
  role: {
		type: String,
		enum: [
			'Maintenance Manager',
			'Operations Manager',
			'Operator',
			'Technician'
		],
		required: true
	},
	rank: {
		type: String,
		enum: [
      'Craftsman',
			'Private',
			'Corporal',
			'Master Corporal',
			'Sergeant',
			'Warrant Officer',
			'Master Warrant Officer',
			'2nd Lieutenant',
			'Lieutenant',
			'Captain',
			'Major'
		],
		required: true
	},
	firstName: {
		type: String,
		minlength: 2,
		maxlength: 30,
		trim: true,
		required: true
	},
	lastName: {
		type: String,
		minlength: 2,
		maxlength: 30,
		trim: true,
		required: true
	},
	occupation: {
		type: String,
		enum: [
			'Armoured Officer',
			'Armoured Soldier',
			'Artillery Officer',
			'Combat Engineer',
			'Electrical-Mechanical Engineering Officer',
			'Electronic-Optronic Technician',
			'Engineer Officer',
			'Gunner',
			'Infantry Officer',
			'Infantry Soldier',
			'Logistics Officer',
			'Materials Technician',
			'Military Police Officer',
			'Mobile Support Equipment Operator',
			'Supply Technician',
			'Vehicle Technician',
			'Weapons Technician'
		],
		required: true
	},
	available: {
		type: Boolean,
		default: true,
		required: true
	},
	dismounted: {
		type: Boolean,
		default: true,
		required: true
	},
	username: {
		type: String,
		hide: true,
		lowercase: true,
		minlength: 6,
		maxlength: 20,
		trim: true,
		unique: true,
		required: true
	},
	password:  {
		type: String,
		hide: true,
		minlength: 8,
		maxlength: 20,
		trim: true,
		required: true
	}
},
{
	timestamps: true
})

userSchema.plugin(mongooseHidden)

const User = mongoose.model('User', userSchema)

module.exports = User