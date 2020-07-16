const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Vehicle.find(req.query)
      .populate("occupant")
      .populate("repairRequests")
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Vehicle.findById(req.params.id)
      .populate("occupant")
      .populate("repairRequests")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Vehicle.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateById: function (req, res) {
    db.Vehicle.findOneAndUpdate({ _id: req.params.id }, req.body, {
      returnOriginal: false,
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
