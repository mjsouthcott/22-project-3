const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vehicleSchema = new Schema ({
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
			'assets/images/vehicleIcons/armoured-engineering-vehicle.png',
			'assets/images/vehicleIcons/armoured-patrol-vehicle.png',
			'assets/images/vehicleIcons/armoured-recovery-vehicle.png',
			'assets/images/vehicleIcons/heavy-logistic-vehicle-refueller.png',
			'assets/images/vehicleIcons/heavy-logistic-vehicle-tank-transporter.png',
			'assets/images/vehicleIcons/infantry-fighting-vehicle.png',
			'assets/images/vehicleIcons/main-battle-tank.png',
			'assets/images/vehicleIcons/medium-logistic-vehicle-cargo.png',
			'assets/images/vehicleIcons/medium-logistic-vehicle-command-post.png',
			'assets/images/vehicleIcons/medium-logistic-vehicle-gun-tractor.png',
			'assets/images/vehicleIcons/medium-logistic-vehicle-mobile-repair-team.png'
		],
		required: true
	},
	// maintenanceStatus: {
	// 	type: String,
	// 	enum: [
	// 		'Serviceable',
	// 		'Unserviceable'
	// 	],
	// 	default: 'Serviceable',
	// 	required: true
	// },
	serviceable: {
		type: Boolean,
		default: true,
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