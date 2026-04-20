const router = require("express").Router();
const ctrl = require("../controllers/flight_controllers");

router.post("/", ctrl.createFlight);
router.get("/search", ctrl.searchFlights);

module.exports = router;