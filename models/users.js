const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  created: {
    type: Date,
    default: Date.now,
  },

  userName: {
    type: String,
    trim: true,
    required: "Enter a user name",
  },

  name: {
    firstName: {
      type: String,
      trim: true,
      required: "Enter a first name",
    },
    lastName: {
      type: String,
      trim: true,
      required: "Enter a last name",
    },
  },

  trips: [
    {
      tripName: {
        type: String,
        trim: true,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
