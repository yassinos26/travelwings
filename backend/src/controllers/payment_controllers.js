import { createPayment } from "../services/paymentservice.js";
const Payment = require("../models/Payment");

export const initPayment = async (req, res) => {
  try {
    const { amount } = req.body;

    const data = await createPayment(amount);

    res.json({
      payUrl: data.payUrl,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur paiement" });
  }
};