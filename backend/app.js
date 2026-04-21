const express = require("express");
const cors = require("cors");

const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const swaggerUi = require("swagger-ui-express");
const specs = require("./src/config/swagger");

// const logger = require("../utils/logger");

const app = express();

// // logger installation
// logger.info("Server started");
// logger.error(err.message);

// swagger config
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// security Methods
app.use(helmet());

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

// middlewares
app.use(require("./src/middlewares/error"));
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