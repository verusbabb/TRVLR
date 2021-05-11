const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./users.js");

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
  tripCollections: {
    type: Schema.Types.ObjectId,
    ref: "CollectionsSchema",
  },
  tripExpenses: {
    type: Schema.Types.ObjectId,
    ref: "ExpensesSchema",
  },
});

const CollectionsSchema = new Schema({
  collections: [
    {
      collectionName: {
        type: String,
        trim: true,
        required: true,
      },
      collectionDescription: {
        type: String,
      },
      collectionUrl: {
        type: String,
      },
    },
  ],
});

const ExpensesSchema = new Schema({
  expenses: [
    {
      expenseDescription: {
        type: String,
        trim: true,
        required: true,
      },
      expenseAmount: {
        type: Number,
        required: true,
      },
      expenseSubmitter: {
        type: String,
        trim: true,
        required: true,
      },
      expenseDate: {
        type: String,
        required: true,
      },
    },
  ],
});

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;
