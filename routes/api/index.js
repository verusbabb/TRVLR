const router = require("express").Router();
const userRoutes = require("./users");
const tripRoutes = require("./trips");
const usernameRoutes = require("./username");

// User routes
router.use("/users", userRoutes);
router.use("/trips", tripRoutes);
router.use("/username", usernameRoutes);

module.exports = router;
