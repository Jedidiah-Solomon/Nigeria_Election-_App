const Election = require("../models/electionModel");

// Create a new election
exports.createElection = async (req, res) => {
  try {
    const election = new Election(req.body);
    await election.save();
    res.status(201).json(election);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all elections
exports.getElections = async (req, res) => {
  try {
    const elections = await Election.find();
    res.status(200).json(elections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
