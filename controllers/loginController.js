const db = require("../models");
const Bcrypt = require("bcryptjs");

module.exports = {
  authenticate: function (req, res) {
    db.User.find({ username: req.params.username })
      .then((user) => {
        // Hash req.body.password and compare it to user.password; if the same, return user
      })
  }

  // findAll: function (req, res) {
  //   db.User.find(req.query)
  //     .sort({ date: -1 })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // findById: function (req, res) {
  //   db.User.findById(req.params.id)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // create: function (req, res) {
  //   req.body.password = Bcrypt.hashSync(req.body.password, 10);
  //   db.User.create(req.body)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // updateById: function (req, res) {
  //   db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
};
