const router = require("express").Router();
const ctrl = require("../controllers/flight_controllers");
const auth = require("../middlewares/auth");
const role = require("../middlewares/role");

router.post("/create_flights", auth, role("admin"), ctrl.createFlight);
router.get("/search_flights", ctrl.searchFlights);
router.get("/:id", ctrl.getFlight);
router.put("/:id", auth, role("admin"), ctrl.UpdateFlight);
router.delete("/:id", auth, role("admin"), ctrl.DeleteFlight);

module.exports = router;
console.log("Flight routes loaded");