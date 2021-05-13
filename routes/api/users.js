const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport");
// Matches with "/api/users"
router.route("/").get(usersController.findAllUsers);
// .post(usersController.createUser);

router
  .route("/login")
  .post(passport.authenticate("local"), usersController.findOneUser);
router.route("/signout").get(function(req, res, next) {
  console.log(req.user, "req.user");
  res.json(req.user);
});
router.route("/signup").post(usersController.createUser);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findUserById)
  .post(usersController.addTrip)
  .put(usersController.updateUser)
  .delete(usersController.removeUser);

module.exports = router;
