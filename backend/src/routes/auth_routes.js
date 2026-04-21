const router = require("express").Router();
const ctrl = require("../controllers/auth_controllers");
const { body } = require("express-validator");
const validate = require("../middlewares/validator");

router.post(
  "/register",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 })
  ],
  validate,
  ctrl.register
);
router.post("/login", ctrl.login);

module.exports = router;