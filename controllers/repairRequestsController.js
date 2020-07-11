const db = require("../models")

module.exports = {
  findAll: function(req, res) {
    db.RepairRequest
      .find(req.query)
      .populate('assigntedTo')
      .populate('repairWorkOrder')
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findById: function(req, res) {
    db.RepairRequest
      .findById(req.params.id)
      .populate('assigntedTo')
      .populate('repairWorkOrder')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    db.RepairRequest
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateById: function(req, res) {
    db.RepairRequest
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
