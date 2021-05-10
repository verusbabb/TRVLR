const db = require("../models");

// Defining methods for the UsersController
module.exports = {
  findAllUsers: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findOneUser: function (req, res) {
    db.User.findOne({ userName: req.query.userName })
      .then((dbModel) => {
        dbModel.comparePassword(req.query.password, function (err, isMatch) {
          console.log(err, isMatch);
          if (err) res.status(422).json(err);
          if (isMatch) {
            res.json(dbModel);
          } else {
            res.status(401).json();
          }
        });

        req.user = dbModel
        console.log(dbModel, "current user");

      })

      .catch((err) => res.status(422).json(err));
  },

  findUserById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createUser: function (req, res) {
    console.log(req.body);
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateUser: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeUser: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
