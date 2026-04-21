const router = require("express").Router();
const ctrl = require("../controllers/reservation_controllers");
const auth = require("../middlewares/auth");

router.post("/create_reservation", auth, ctrl.createReservation);
router.get("/my_reservations", auth, ctrl.getMyReservations);
router.put("/:id/update_status", auth, ctrl.updateReservation);
router.delete("/:id", auth, ctrl.DeleteReservation);

module.exports = router;
console.log("Reservation routes loaded");