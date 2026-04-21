const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    numeroCarte: { type: String, required: true },
    dateExpiration: { type: String, required: true },
    cvv: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    flight: { type: mongoose.Schema.Types.ObjectId, ref: "Flight" },
    deal: { type: mongoose.Schema.Types.ObjectId, ref: "Deal" },
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending"
    }
}, { timestamps: true });

module.exports = mongoose.model("Payment", paymentSchema);
console.log("Payment model loaded");