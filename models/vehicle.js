const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vehicleSchema = new Schema ({
	type: {
		type: String,
		enum: [
			'Armoured Engineering Vehicle',
			'Armoured Patrol Vehicle',
			'Armoured Recovery Vehicle',
			'Heavy Logistic Vehicle, Refueller',
			'Heavy Logistic Vehicle, Tank Transporter',
			'Infantry Fighting Vehicle',
			'Main Battle Tank',
			'Medium Logistic Vehicle, Cargo',
			'Medium Logistic Vehicle, Command Post',
			'Medium Logistic Vehicle, Gun Tractor',
			'Medium Logistic Vehicle, Mobile Repair Team'
		],
		required: true	
	},
	registrationNumber: {
		type: String,
		minlength: 5,
		maxlength: 5,
		unique: true,
		required: true
	},
	callSign: {
		type: String,
		minlength: 1,
		maxlength: 4,
		unique: true,
		required: true
	},
	iconSrc: {
		type: String,
		enum: [
			'assets/images/armoured-engineering-vehicle.png',
			'assets/images/armoured-patrol-vehicle.png',
			'assets/images/armoured-recovery-vehicle.png',
			'assets/images/heavy-logistic-vehicle-refueller.png',
			'assets/images/heavy-logistic-vehicle-tank-transporter.png',
			'assets/images/infantry-fighting-vehicle.png',
			'assets/images/main-battle-tank.png',
			'assets/images/medium-logistic-vehicle-cargo.png',
			'assets/images/medium-logistic-vehicle-command-post.png',
			'assets/images/medium-logistic-vehicle-gun-tractor.png',
			'assets/images/medium-logistic-vehicle-mobile-repair-team.png'
		],
		required: true
	},
	maintenanceStatus: {
		type: String,
		enum: [
			'Serviceable',
			'Unserviceable'
		],
		default: 'Serviceable',
		required: true
	},
	occupant: {
		type: Schema.Types.ObjectId,
    ref: 'User'
	},
	repairRequests: [{
		type: Schema.Types.ObjectId,
		ref: 'RepairRequest'
	}]
},
{
	timestamps: true
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema)

module.exports = Vehicle