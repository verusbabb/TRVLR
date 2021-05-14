const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./users.js");
const Expense = require("./expenses.js")

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


const Trip = mongoose.model("Trip", TripSchema);
const Collection = mongoose.model("Collection", CollectionsSchema);

module.exports = Trip;
