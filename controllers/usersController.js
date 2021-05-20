const db = require("../models");
// const passport = require("..");

// Defining methods for the UsersController
module.exports = {
  findAllUsers: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findOneUser: function (req, res) {
    if (req.user) {
      res.json(req.user);
    } else {
      res.status(422).json(err);
    }
  },

  findUserById: function (req, res) {
    db.User.findById(req.params.id)
      .populate({
        path: "memberOf",
        populate: {
          path: "tripSchedule",
          model: "Schedule",
        },
      })
      .exec()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createUser: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => {
        res.status(422).json(err);
      });
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

  findUserByUsername: function (req, res) {
    db.User.findOne({ userName: req.params.username })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  addTrip: function (req, res) {
    db.Trip.create(req.body)
      .then(function (dbTrip) {
        return db.User.findOneAndUpdate(
          { _id: req.user._id },
          {
            $addToSet: { memberOf: dbTrip.id },
          },
          { new: true, upsert: true }
        );
      })
      .then(function (dbUser) {
        res.json(dbUser);
      })
      .catch(function (err) {
        res.json(err);
      });
  },

  signOut: function (req, res) {
    req.logout();
    res.redirect("/signout");
  },
};
