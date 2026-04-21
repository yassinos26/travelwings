const router = require("express").Router();
const ctrl = require("../controllers/reservation_controllers");
const auth = require("../middlewares/auth");

router.post("/", auth, ctrl.createReservation);
router.get("/my", auth, ctrl.getMyReservations);
router.put("/:id/cancel", auth, ctrl.updateReservation);
router.delete("/:id", auth, ctrl.DeleteReservation);

module.exports = router;
console.log("Reservation routes loaded");