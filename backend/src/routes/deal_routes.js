const router = require("express").Router();
const ctrl = require("../controllers/deal_controllers");

router.get("/deals", ctrl.getDeals);
router.post("/create_deals", ctrl.createDeal);
router.put("/:id", ctrl.UpdateDeal);
router.delete("/:id", ctrl.DeleteDeal);

module.exports = router;
console.log("Deal routes loaded");