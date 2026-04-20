const Flight = require("../models/Flight");

exports.createFlight = async (req, res) => {
  const flight = await Flight.create(req.body);
  res.json(flight);
};

exports.searchFlights = async (req, res) => {
  const { origin, destination } = req.query;

  const flights = await Flight.find({ origin, destination });

  res.json(flights);
};