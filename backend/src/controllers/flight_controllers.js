const Flight = require("../models/Flight");
const paginate = require("../utils/pagination");

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
    const {
      origin,
      destination,
      minPrice,
      maxPrice,
      date
    } = req.query;

    let query = {};

    if (origin) query.origin = origin;
    if (destination) query.destination = destination;

    if (date) {
      query.departureDate = {
        $gte: new Date(date)
      };
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const flights = await Flight.find(query);

    res.json(flights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Flight Details
exports.getFlight = async (req, res) => {
  try {
    const { limit, skip, page } = paginate(req);
    const flights = await Flight.find()
      .skip(skip)
      .limit(limit);
    const total = await Flight.countDocuments();
    res.json({
      page,
      total,
      results: flights
    });
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