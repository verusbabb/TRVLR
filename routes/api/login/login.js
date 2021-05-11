const router = require("express").Router();
const usersController = require("../../../controllers/usersController");

// Matches with "/api/users/login"
router.route("/").post(usersController.login);

module.exports = router;
