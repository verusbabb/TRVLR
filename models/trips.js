const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./users.js");
const Expense = require("./expenses.js");
const Collection = require("./collections.js");
const Schedule = require("./schedule.js");

const TripSchema = new Schema({
  created: {
    type: Date,
    default: Date.now,
  },

  tripId: {
    type: String,
  },

  tripName: {
    type: String,
    trim: true,
    required: true,
  },

  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  description: {
    type: String,
  },
  tripOwner: {
    type: String,
    // ref: "User",
    // required: true,
  },
  members: [{
    type: Schema.Types.ObjectId,
    ref: "User",
  }],
  tripCollections: [{
    type: Schema.Types.ObjectId,
    ref: "Collection",
  }],
  tripExpenses: [{
    type: Schema.Types.ObjectId,
    ref: "Expense",
  }],
  tripSchedule: [{
    type: Schema.Types.ObjectId,
    ref: "Schedule",
  }]
});

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;
