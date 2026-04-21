const Reservation = require("../models/Reservation");

// Create Reservation 
exports.createReservation = async (req, res) => {
  try {
    let price = 0;

    if (req.body.flight) {
      const flight = await Flight.findById(req.body.flight);
      price = flight.price;
    }

    if (req.body.deal) {
      const deal = await Deal.findById(req.body.deal);
      price = deal.price;
    }

    const reservation = await Reservation.create({
      user: req.user.id,
      flight: req.body.flight,
      deal: req.body.deal,
      totalPrice: price
    });

    res.json(reservation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get My Reservations
exports.getMyReservations = async (req, res) => {
  const reservations = await Reservation.find({ user: req.user.id })
    .populate("flight")
    .populate("deal");

  res.json(reservations);
};

// Update Reservation Status
exports.updateReservation = async (req, res) => {
  const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status: "cancelled" },
      { new: true }
    );

    res.json(reservation);
  };

// Delete Reservation
exports.DeleteReservation = async (req, res) => {
  await Reservation.findByIdAndDelete(req.params.id);
  res.json({ msg: "Reservation deleted" });
};

console.log("Reservation controller loaded");