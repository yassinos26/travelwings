import express from "express";
import { initPayment } from "../controllers/payment_controllers.js";

const router = express.Router();

router.post("/pay", initPayment);

export default router;