const Party = require("../models/partyModel");

// Create a new party
exports.createParty = async (req, res) => {
  try {
    const party = new Party(req.body);
    await party.save();
    res.status(201).json(party);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all parties
exports.getParties = async (req, res) => {
  try {
    const parties = await Party.find();
    res.status(200).json(parties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a party by ID
exports.updateParty = async (req, res) => {
  try {
    const party = await Party.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!party) {
      return res.status(404).json({ message: "Party not found" });
    }

    res.status(200).json(party);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a party by ID
exports.deleteParty = async (req, res) => {
  try {
    const party = await Party.findByIdAndDelete(req.params.id);

    if (!party) {
      return res.status(404).json({ message: "Party not found" });
    }

    res.status(200).json({ message: "Party deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
