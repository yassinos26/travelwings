const router = require("express").Router();
const ctrl = require("../controllers/deal_controllers");

router.get("/", ctrl.getDeals);
router.post("/", ctrl.createDeal);
router.put("/:id", ctrl.UpdateDeal);
router.delete("/:id", ctrl.DeleteDeal);

module.exports = router;
console.log("Deal routes loaded");