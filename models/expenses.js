const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Trip = require("./trips")

const ExpensesSchema = new Schema({
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
        tripRef: {
            type: Schema.Types.ObjectId,
            ref: "TripSchema"
        }
      },
  );

const Expense = mongoose.model("Expense", ExpensesSchema);

module.exports = Expense