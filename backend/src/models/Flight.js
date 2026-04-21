const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  origin: String,
  destination: String,
  departureDate: Date,
  price: Number,
  airline: String,
  seatsAvailable: Number
});

module.exports = mongoose.model("Flight", flightSchema);
console.log("Flight model loaded");