const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
      },
  );

const Expense = mongoose.model("Expense", ExpensesSchema);

module.exports = Expense