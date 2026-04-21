const router = require("express").Router();
const ctrl = require("../controllers/flight_controllers");

router.post("/", ctrl.createFlight);
router.get("/search", ctrl.searchFlights);
router.get("/:id", ctrl.getFlight);
router.put("/:id", ctrl.UpdateFlight);
router.delete("/:id", ctrl.DeleteFlight);

module.exports = router;
console.log("Flight routes loaded");