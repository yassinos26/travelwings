import { initPayment } from "../controllers/payment_controllers.js";

const router = express.Router();

router.post("/payment", initPayment);

export default router;
console.log("Payment routes loaded");