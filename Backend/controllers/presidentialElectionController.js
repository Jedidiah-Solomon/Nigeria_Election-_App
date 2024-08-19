const PresidentialElection = require("../models/presidentialElectionModel");
const ContestantModel = require("../models/ContestantModel");

// Create a new presidential election
exports.createPresidentialElection = async (req, res) => {
  try {
    const election = new PresidentialElection(req.body);
    await election.save();
    res.status(201).json(election);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get presidential election data with vote counts and candidate details
exports.getPresidentialElectionData = async (req, res) => {
  try {
    // Fetch all presidential election data
    const elections = await PresidentialElection.find({
      electionName: "Presidential",
    });

    // Count votes for each party, ensuring party names are in lowercase
    const voteCounts = elections.reduce((acc, election) => {
      election.candidates.forEach((candidate) => {
        const partyName = candidate.partyName.toLowerCase();
        acc[partyName] = (acc[partyName] || 0) + 1;
      });
      return acc;
    }, {});

    // Fetch candidate details from Contestants collection
    const candidates = await ContestantModel.find({ position: "President" });

    // Merge vote counts with candidate details, ensuring party names are in lowercase
    const result = candidates.map((candidate) => ({
      ...candidate.toObject(),
      voteCount: voteCounts[candidate.party.toLowerCase()] || 0,
    }));

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
