const GovernorshipElection = require("../models/governorshipElectionModel");
const ContestantModelGovernorship = require("../models/ContestantModel");

// Create a new governorship election
exports.createGovernorshipElection = async (req, res) => {
  try {
    const election = new GovernorshipElection(req.body);
    await election.save();
    res.status(201).json(election);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get governorship election data by state
exports.getGovernorshipElectionData = async (req, res) => {
  const { state } = req.params;

  try {
    const election = await GovernorshipElection.find({
      electionName: "Governorship",
      state,
    });
    if (!election) {
      return res.status(404).json({ message: "Election not found" });
    }

    res.json(election);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get governorship election data with vote counts and candidate details
exports.getGovernorshipElectionData = async (req, res) => {
  try {
    // Extract state from URL parameters
    const { state } = req.params;

    // Ensure state is provided
    if (!state) {
      return res.status(400).json({ message: "State is required" });
    }

    // Fetch all governorship election data for the specified state
    const elections = await GovernorshipElection.find({
      electionName: "Governorship",
      state: state,
    });

    // Count votes for each party, ensuring party names are in lowercase
    const voteCounts = elections.reduce((acc, election) => {
      election.candidates.forEach((candidate) => {
        const partyName = candidate.partyName.toLowerCase();
        acc[partyName] = (acc[partyName] || 0) + 1;
      });
      return acc;
    }, {});

    // Fetch candidate details from Contestants collection for the governorship position
    const candidates = await ContestantModelGovernorship.find({
      position: "Governor",
      state: state,
    });

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
