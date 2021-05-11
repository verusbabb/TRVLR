const router = require("express").Router();
const userRoutes = require("./users");
const tripRoutes = require("./trips");

// User routes
router.use("/users", userRoutes);
router.use("/trips", tripRoutes);

module.exports = router;
