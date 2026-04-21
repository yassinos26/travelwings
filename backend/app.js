const express = require("express");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", require("./src/routes/auth_routes"));
app.use("/api/flights", require("./src/routes/flight_routes"));
app.use("/api/deals", require("./src/routes/deal_routes"));
app.use("/api/reservations", require("./src/routes/reservation_routes"));
app.use("/api/payments", require("./src/routes/payment_routes"));

// test route
app.get("/", (req, res) => {
  res.send("API TravelWings running 🚀");
});

module.exports = app;
console.log("Express app loaded");