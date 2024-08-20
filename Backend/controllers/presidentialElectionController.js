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

// Get presidential election winner
exports.getPresidentialElectionWinner = async (req, res) => {
  try {
    // Fetch all presidential election data
    const elections = await PresidentialElection.find({
      electionName: "Presidential",
    });

    // Count votes for each party
    const voteCounts = elections.reduce((acc, election) => {
      election.candidates.forEach((candidate) => {
        const partyName = candidate.partyName.toUpperCase();
        acc[partyName] = (acc[partyName] || 0) + 1;
      });
      return acc;
    }, {});

    // Find the highest vote count
    const maxVotes = Math.max(...Object.values(voteCounts));

    // Find all parties with the highest vote count
    const winningParties = Object.keys(voteCounts).filter(
      (party) => voteCounts[party] === maxVotes
    );

    if (winningParties.length > 1) {
      // If there are multiple winners, return a message
      return res.json({
        message: "Multiple winners",
        winners: winningParties.map((party) => ({
          party,
          voteCount: voteCounts[party],
        })),
      });
    }

    // If there's only one winner, fetch winner details
    const winnerParty = winningParties[0];
    const winner = await ContestantModel.findOne({
      position: "President",
      party: winnerParty,
    });

    if (!winner) {
      return res.status(404).json({ message: "No winner found" });
    }

    // Return winner details with full name and vote count
    res.json({
      fullName: `${winner.firstName} ${
        winner.middleName ? winner.middleName + " " : ""
      }${winner.lastName}`,
      position: winner.position,
      party: winner.party,
      image: winner.image,
      partyLogo: winner.partyLogo,
      voteCount: voteCounts[winnerParty] || 0,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
