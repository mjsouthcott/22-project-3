const db = require("../models");
const Bcrypt = require("bcryptjs");

module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    req.body.password = Bcrypt.hashSync(req.body.password, 10);
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  updateById: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      returnOriginal: false,
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  updatePassword: function (req, res) {
    const newPassword = Bcrypt.hashSync(req.body.newPassword, 10);
    db.User.findById({ _id: req.body.id })
      .then((dbModel) => {
        Bcrypt.compare(req.body.oldPassword, dbModel.password,(err, isMatch) => {
            if (err) throw new Error(err);
            if (isMatch) {
              db.User.updateOne({ _id: req.body.id }, {password:newPassword})
              .then((dbModel) => res.json(dbModel));
            };
          });
      })
      .catch((err) => res.status(422).json(err));
  }};
