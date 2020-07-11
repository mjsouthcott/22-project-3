const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Counter = require("./counter");

// Repair request schema
const repairRequestSchema = new Schema ({
	number: {
		type: Number
	},
	estimatedConditionClass: {
		type: String,
		enum: [
			'Beyond Repair',
			'Close Support',
			'Depot',
			'General Support',
			'Integral',
			'Unknown'
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
	faultPhotos: {
		type: [{
			src: {
				type: String,
				required: true
			}
		}]
	},
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

repairRequestSchema.pre('save', async function (next) {
	await Counter
		.findOne({ name: 'Number'})
		.then(counter => {
			this.number = counter.value
			counter.value++
			counter.save()
			next()
		})
})

const RepairRequest = mongoose.model('RepairRequest', repairRequestSchema)

module.exports = RepairRequest