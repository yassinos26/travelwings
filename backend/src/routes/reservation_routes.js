const router = require("express").Router();
const ctrl = require("../controllers/reservation_controllers");
const auth = require("../middlewares/auth");

router.post("/", auth, ctrl.createReservation);
router.get("/my", auth, ctrl.getMyReservations);

module.exports = router;