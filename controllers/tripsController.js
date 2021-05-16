// const mongoose = require("mongoose");
const db = require("../models");

// Defining methods for the TripsController
module.exports = {
  findAllTrips: function (req, res) {
    db.Trip.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findTripById: function (req, res) {
    db.Trip.findById(req.params.id)
      .populate("tripExpenses")
      .populate("tripSchedule")
      .populate("members")
      .sort({ "tripSchedule.activityName": -1 })
      .exec()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findTripByTripId: function (req, res) {
    console.log(req.params.tripId)
    db.Trip.findOne(
      {
        tripId: req.params.tripId
      })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createTrip: function (req, res) {
    //   console.log(req.body);
    //   db.Trip.create(req.body)
    //     .then((dbModel) => res.json(dbModel))
    //     .catch((err) => res.status(422).json(err));
    // },
    db.Trip.create(req.body)
      .then((dbModel) => {
        db.User.findByIdAndUpdate(
          { _id: req.body.id },
          { $push: { memberOf: dbModel._id } }
        )
        .then((res) => {
          res.json(dbModel);
        });
      })
      .catch((err) => res.status(422).json(err));
  },

  createExpense: function (req, res) {
    console.log(req.params);
    db.Expense.create(req.body)
      .then((dbExpense) => {
        return db.Trip.findByIdAndUpdate(
          req.params.id,
          { $addToSet: { tripExpenses: dbExpense.id } },
          { new: true, upsert: true }
        ).then((expenseData) => {
          console.log(expenseData);
          res.json(expenseData);
        });
      })
      .catch((err) => res.status(422).json(err));
  },

  createSchedule: function (req, res) {
    console.log(req.body, "schedule test2");
    db.Schedule.create(req.body)
     .then((dbTrip) => {
       db.Trip.findByIdAndUpdate(
         req.params.id,
         { $addToSet: { tripSchedule: dbTrip._id } }
       )
       .populate("tripSchedule")
       .exec()
       .then((dbSchedule) => {
         res.json(dbSchedule);
       });
     })
     .catch((err) => res.status(422).json(err));
 },
 
  updateTrip: function (req, res) {
    console.log(req.body);
    db.Trip.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function (dbTrip) {
      console.log(dbTrip);
      return db.User.findByIdAndUpdate(
        req.user._id,
        {
          $addToSet: { memberOf: dbTrip.id },
        },
        { new: true, upsert: true }
      );
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeTrip: function (req, res) {
    db.Trip.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
