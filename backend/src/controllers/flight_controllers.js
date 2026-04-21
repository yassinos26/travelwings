const Flight = require("../models/Flight");

// Create Flight
exports.createFlight = async (req, res) => {
  try {
    const flight = await Flight.create(req.body);
    res.json(flight);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search Flights
exports.searchFlights = async (req, res) => {
  try {
    const { origin, destination } = req.query;

    const query = {};
    if (origin) query.origin = origin;
    if (destination) query.destination = destination;

    const flights = await Flight.find(query);

    res.json(flights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Flight Details
exports.getFlight = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);

    res.json(flight);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Flight
exports.UpdateFlight = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(flight);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Flight
exports.DeleteFlight = async (req, res) => {
  try {
    await Flight.findByIdAndDelete(req.params.id);

    res.json({ msg: "Flight deleted" }); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
    
console.log("Flight controller loaded");