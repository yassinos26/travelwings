import { createPayment } from "../services/paymentservice.js";
const Payment = require("../models/Payment");

exports.initPayment = async (req, res) => {
  try {
    const Payment = await Payment.create({
      user: req.user.id,
      amount: req.body.amount,
      status: "pending"
    });
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