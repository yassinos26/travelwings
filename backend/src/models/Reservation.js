const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  flight: { type: mongoose.Schema.Types.ObjectId, ref: "Flight" },
  deal: { type: mongoose.Schema.Types.ObjectId, ref: "Deal" },
  totalPrice: Number,
  status: { type: String, default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Reservation", reservationSchema);