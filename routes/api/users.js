const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router
  .route("/")
  .get(usersController.findAllUsers)
  .post(usersController.createUser);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findUserById)
  .put(usersController.updateUser)
  .delete(usersController.removeUser);

module.exports = router;
