const Deal = require("../models/Deal");

// Get Deals
exports.getDeals = async (req, res) => {
  try {
    const { destination } = req.query;

    const query = {};
    if (destination) query.destination = destination;

    const deals = await Deal.find(query);

    res.json(deals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create Deal
exports.createDeal = async (req, res) => {
  const deal = await Deal.create(req.body);
  res.json(deal);
};

// Update Deal
exports.UpdateDeal = async (req, res) => {
  const deal = await Deal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(deal);
};

// Delete Deal  
exports.DeleteDeal = async (req, res) => {
  await Deal.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deal deleted" });
};

console.log("Deal controller loaded");