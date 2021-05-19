const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users/username"
router
  .route("/:username")
  .get(usersController.findUserByUsername)

module.exports = router;