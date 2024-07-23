const Contestant = require("../models/contestantModel");

// Create a new contestant
exports.createContestant = async (req, res) => {
  try {
    const contestant = new Contestant(req.body);
    await contestant.save();
    res.status(201).json(contestant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all contestants
exports.getContestants = async (req, res) => {
  try {
    const contestants = await Contestant.find();
    res.status(200).json(contestants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
