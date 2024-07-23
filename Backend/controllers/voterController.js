const Voter = require("../models/voterModel");

// Create a new voter
exports.createVoter = async (req, res) => {
  try {
    const voter = new Voter(req.body);
    await voter.save();
    res.status(201).json(voter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all voters
exports.getVoters = async (req, res) => {
  try {
    const voters = await Voter.find();
    res.status(200).json(voters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
