const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const Schema = mongoose.Schema

// Fault photo schema
// const faultPhotoSchema = new Schema ({
// 	src: {
// 		type: String,
// 		required: true
// 	}
// },
// {
// 	timestamps: true
// })

// // Location schema
// const locationSchema = new Schema ({
// 	latitude: {
// 		type: Number,
// 		required: true
// 	},
// 	longitude: {
// 		type: Number,
// 		required: true
// 	}
// },
// {
// 	timestamps: true
// })

// Repair request schema
const repairRequestSchema = new Schema ({
	number: {
    type: Number,
    default: 1
	},
	estimatedConditionClass: {
		type: String,
		enum: [
			'Beyond Repair',
			'Close Support',
			'Depot',
			'General Support',
			'Integral',
			'Unknwon'
		],
		required: true
	},
	vehicleCanBeMovedBy: {
		type: String,
		enum: [
			'Drivable',
			'Straight Pull',
			'Suspended Tow'
		],
		required: true
	},
	localTacticalSituation: {
		type: String,
		enum: [
			'Safe',
			'Hostile'
		],
		required: true
	},
	crewRemainedWithVehicle: {
		type: Boolean,
		required: true
	},
	// faultPhotos: [{
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'FaultPhoto'
	// }],
	faultPhotos: {
		type: [{
			src: {
				type: String,
				required: true
			}
		}]
	},
	// location: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'Location',
	// 	required: true
	// },
	location: {
		type: {
			latitude: {
				type: Number,
				required: true
			},
			longitude: {
				type: Number,
				required: true
			}
		}
	},
	status: {
		type: String,
		enum: [
			'Open',
			'Work In Progress',
			'Complete'
		],
		default: 'Open',
		required: true
	},
	assignedTo: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	repairWorkOrder: {
		type: Schema.Types.ObjectId,
		ref: 'RepairWorkOrder'
	}
},
{
	timestamps: true
})

repairRequestSchema.plugin(AutoIncrement, { inc_field: 'number' })

// const FaultPhoto = mongoose.model('FaultPhoto', faultPhotoSchema)
// const Location = mongoose.model('Location', locationSchema)
const RepairRequest = mongoose.model('RepairRequest', repairRequestSchema)

// module.exports = FaultPhoto
// module.exports = Location
module.exports = RepairRequest