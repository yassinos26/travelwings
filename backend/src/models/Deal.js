const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  title: String,
  destination: String,
  price: Number,
  description: String,
  image: String
});

module.exports = mongoose.model("Deal", dealSchema);