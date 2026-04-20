const router = require("express").Router();
const ctrl = require("../controllers/deal_controllers");

router.get("/", ctrl.getDeals);
router.post("/", ctrl.createDeal);

module.exports = router;