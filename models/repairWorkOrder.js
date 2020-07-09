const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Repair part schema
// const repairPartSchema = new Schema ({
// 	type: {
// 		type: String,
// 		minlength: 2,
// 		maxlength: 255,
// 		trim: true,
// 		required: true
// 	},
// 	quantity:  {
// 		type: Number,
// 		required: true
// 	},
// 	unit:  {
// 		type: String,
// 		enum: [
// 			'N/A',
// 			'L',
// 			'm'
// 		],
// 		required: true
// 	}
// },
// {
// 	timestamps: true
// })

// Maintenance action schema
// const maintenanceActionSchema = new Schema ({
// 	actionTaken: {
// 		type: String,
// 		minlength: 2,
// 		maxlength: 255,
// 		trim: true,
// 		required: true
// 	},
// 	repairParts: [{
// 		type: Schema.Types.ObjectId,
// 		ref: 'RepairPart'
// 	}]
// },
// {
// 	timestamps: true
// })

// Subsystem schema
// const subsystemSchema = new Schema ({
// 	serial: {
// 		type: Number,
// 		required: true
// 	},
// 	description: {
// 		type: String,
// 		required: true
// 	},
// 	status: {
// 		type: String,
// 		enum: [
// 			'Serviceable',
// 			'Not Applicable',
// 			'Operator Action Required',
// 			'Maintenance Action Required'
// 		],
// 		required: true
// 	},
// 	maintenanceActions: [{
// 		type: Schema.Types.ObjectId,
// 		ref: 'MaintenanceAction'
// 	}]
// },
// {
// 	timestamps: true
// })

// System schema
// const systemSchema = new Schema ({
// 	serial: {
// 		type: Number,
// 		required: true
// 	},
// 	description: {
// 		type: String,
// 		required: true
// 	},
// 	subsystems: [{
// 		type: Schema.Types.ObjectId,
// 		ref: 'Subsystem'
// 	}]
// },
// {
// 	timestamps: true
// })

// Repair work order schema
const repairWorkOrderSchema = new Schema ({
	// systems: [{
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'System'
	// }],
	systems: {
		type: [{
			serial: {
				type: Number,
				required: true
			},
			description: {
				type: String,
				required: true
			},
			subsystems: {
				type: [{
					serial: {
						type: String,
						required: true
					},
					description: {
						type: String,
						required: true
					},
					status: {
						type: String,
						enum: [
							'Serviceable',
							'Not Applicable',
							'Operator Action Required',
							'Maintenance Action Required'
						],
						required: true
					},
					maintenanceActions: {
						type: [{
							actionTaken: {
								type: String,
								minlength: 2,
								maxlength: 255,
								trim: true,
								required: true
							},
							repairParts: {
								type: [{
									type: {
										type: String,
										minlength: 2,
										maxlength: 100,
										trim: true,
										required: true
									},
									quantity:  {
										type: Number,
										required: true
									},
									unit:  {
										type: String,
										enum: [
											'N/A',
											'L',
											'm'
										],
										required: true
									}
								}]
							}
						}]
					}
				}]
			}
		}]
	},
	completedBy: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	approvedBy: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
},
{
	timestamps: true
})

// const RepairPart = mongoose.model('RepairPart', repairPartSchema)
// const MaintenanceAction = mongoose.model('MaintenanceAction', maintenanceActionSchema)
// const Subsystem = mongoose.model('Subsystem', subsystemSchema)
// const System = mongoose.model('System', systemSchema)
const RepairWorkOrder = mongoose.model('RepairWorkOrder', repairWorkOrderSchema)

// module.exports = RepairPart
// module.exports = MaintenanceAction
// module.exports = Subsystem
// module.exports = System
module.exports = RepairWorkOrder