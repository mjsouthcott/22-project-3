const db = require("../models")
const Bcrypt = require("bcryptjs")

module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    console.log("user controller",req.body)
    //hash user password before saving for security reason
    req.body.password = Bcrypt.hashSync(req.body.password, 10);
    console.log("user controller",req.body)
    db.User
      .create(req.body)
      .then(dbModel => {console.log("here");res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  updateById: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
}
