const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  flight: { type: mongoose.Schema.Types.ObjectId, ref: "Flight" },
  deal: { type: mongoose.Schema.Types.ObjectId, ref: "Deal" },
  totalPrice: { type: Number, required: true, min: 0 },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Reservation", reservationSchema);
console.log("Reservation model loaded");