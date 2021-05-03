const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TripSchema = new Schema({
  created: {
    type: Date,
    default: Date.now,
  },

  //   is this necessary?

  //   is the above necessary?

  trips: [
    {
      members: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      tripName: {
        type: String,
        trim: true,
        required: true,
      },
      collections: [
        {
          name: {
            type: String,
            trim: true,
            required: true,
          },
          url: {
            type: String,
          },
        },
      ],
      expenses: [
        {
          description: {
            type: String,
            trim: true,
            required: true,
          },
          cost: {
            type: Number,
            required: true,
          },
          submitter: {
            type: String,
            trim: true,
          },
          date: {
            type: Date,
            required: true,
          },
        },
      ],
    },
  ],
});

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;
