const Deal = require("../models/Deal");

exports.getDeals = async (req, res) => {
  const deals = await Deal.find();
  res.json(deals);
};

exports.createDeal = async (req, res) => {
  const deal = await Deal.create(req.body);
  res.json(deal);
};