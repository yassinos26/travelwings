const Reservation = require("../models/Reservation");

// Create Reservation 
exports.createReservation = async (req, res) => {
  const reservation = await Reservation.create({
    ...req.body,
    user: req.user.id
  });

  res.json(reservation);
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