// Exporting an object containing all of our models

module.exports = {
  User: require("./users"),
  Trip: require("./trips"),
  Expense: require("./expenses"),
  Schedule: require("./schedule"),
  Collection: require("./collections"),
  Packing: require("./packing")
};
