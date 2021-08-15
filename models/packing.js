const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Trip = require("./trips");

const PackingSchema = new Schema({
  packingDescription: {
    type: String,
    trim: true,
    required: true,
  },
  packingAmount: {
    type: Number,
    required: true,
  },
  packingSubmitter: {
    type: String,
    trim: true,
    required: true,
  },
  tripRef: {
    type: Schema.Types.ObjectId,
    ref: "Trip",
  },
});

const Packing = mongoose.model("Packing", PackingSchema);

module.exports = Packing;