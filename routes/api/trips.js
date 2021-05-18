const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");
const passport = require("../../config/passport");

// Matches with "/api/trips"
router
  .route("/")
  .get(tripsController.findAllTrips)
  .post(tripsController.createTrip);

// Matches with "/api/trips/:id"
router
  .route("/:id")
  .get(tripsController.findTripById)
  .put(tripsController.updateTrip)
  .delete(tripsController.removeTrip)
  .post(tripsController.createExpense);

router.route("/schedule/:id")
  .post(tripsController.createSchedule);

router.route("/expenses/:id")
  .delete(tripsController.deleteExpense);

router
  .route("/collection/:id")
  .post(tripsController.createCollection)
  .put(tripsController.createCollectionItem);

// Matches with "/api/trips/tripId"
router.route("/tripId/:tripId").get(tripsController.findTripByTripId);

module.exports = router;
