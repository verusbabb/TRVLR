const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

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

router
  .route("/schedule/:id")
  .post(tripsController.createSchedule)
  
// Matches with "/api/trips/tripId"
router
  .route("/tripId/:tripId")
  .get(tripsController.findTripByTripId);

module.exports = router;
