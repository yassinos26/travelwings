import axios from "axios";
import { KONNECT_API } from "../config/payment.js";

export const createPayment = async (amount) => {
  const response = await axios.post(
    KONNECT_API,
    {
      receiverWalletId: process.env.KONNECT_WALLET_ID,
      amount: amount * 1000, // millimes
      token: "TND",
      description: "Payement for TravelWings",
      acceptedPaymentMethods: ["wallet", "bank_card"],
      successUrl: `${process.env.FRONT_URL}/success`,
      failUrl: `${process.env.FRONT_URL}/fail`,
    },
    {
      headers: {
        "x-api-key": process.env.KONNECT_API_KEY,
      },
    }
  );

  return response.data;
};