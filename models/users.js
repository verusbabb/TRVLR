const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
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

  memberOf: [
    {
      type: Schema.Types.ObjectId,
      ref: "Trip",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
