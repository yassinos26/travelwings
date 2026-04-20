const Reservation = require("../models/Reservation");

exports.createReservation = async (req, res) => {
  const reservation = await Reservation.create({
    ...req.body,
    user: req.user.id
  });

  res.json(reservation);
};

exports.getMyReservations = async (req, res) => {
  const reservations = await Reservation.find({ user: req.user.id })
    .populate("flight")
    .populate("deal");

  res.json(reservations);
};