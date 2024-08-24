const GovernorshipElection = require("../models/governorshipElectionModel");
const ContestantModelGovernorship = require("../models/contestantModel");
const Voter = require("../models/voterModel");
const VoterRecordGovernorship = require("../models/VoterRecordGovernorshipModel");

// Verify voter's state and create a new governorship election
exports.verifyAndCreateGovernorshipElection = async (req, res) => {
  try {
    const { state, voterNIN, candidates } = req.body;

    // Ensure all required fields are provided
    if (
      !state ||
      !voterNIN ||
      !candidates ||
      !Array.isArray(candidates) ||
      candidates.length === 0
    ) {
      return res.status(400).json({
        message: "All fields are required, and candidates must be an array",
      });
    }

    // Check if the voter exists and their state matches
    const voter = await Voter.findOne({ NIN: voterNIN });
    if (!voter) {
      return res.status(404).json({ message: "Voter not found" });
    }

    if (voter.state !== state) {
      return res
        .status(403)
        .json({ message: "You can only vote in your state of origin" });
    }

    // Check if the voter has already voted
    const existingVote = await VoterRecordGovernorship.findOne({
      voterNIN: voterNIN,
      state: state,
      electionType: "Governorship",
    });

    if (existingVote) {
      return res
        .status(403)
        .json({ message: "You have already voted in this election" });
    }

    // Record the vote
    const newElection = new GovernorshipElection({
      electionName: "Governorship",
      state: state,
      candidates: candidates,
    });

    await newElection.save();

    // Record the voter's participation
    const newVoterRecord = new VoterRecordGovernorship({
      voterNIN: voterNIN,
      state: state,
      electionType: "Governorship",
    });

    await newVoterRecord.save();

    res
      .status(201)
      .json({ success: true, message: "Vote recorded successfully" });
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

//-----//

// Get the winner of the governorship election by state
exports.getGovernorshipElectionWinner = async (req, res) => {
  try {
    const { state } = req.params;

    if (!state) {
      return res.status(400).json({ message: "State is required" });
    }

    // Fetch all governorship elections for the specified state
    const elections = await GovernorshipElection.find({
      electionName: "Governorship",
      state: state,
    });

    if (!elections.length) {
      return res
        .status(404)
        .json({ message: "No elections found for the specified state" });
    }

    // Count votes for each candidate
    const voteCounts = elections.reduce((acc, election) => {
      election.candidates.forEach((candidate) => {
        const fullName = `${candidate.firstName} ${candidate.lastName}`;
        acc[fullName] = (acc[fullName] || 0) + 1;
      });
      return acc;
    }, {});

    // Find the maximum vote count
    const maxVotes = Math.max(...Object.values(voteCounts));

    // Find all candidates with the maximum vote count
    const winners = Object.keys(voteCounts).filter(
      (name) => voteCounts[name] === maxVotes
    );

    if (winners.length > 1) {
      // If there are multiple winners
      return res.status(200).json({
        message: "Multiple winners",
        winners: winners.map((name) => ({
          fullName: name,
          voteCount: maxVotes,
        })),
      });
    } else {
      // If there is a single winner, fetch winner details from Contestants collection
      const winnerName = winners[0];
      const winner = await ContestantModelGovernorship.findOne({
        position: "Governor",
        state: state,
        firstName: winnerName.split(" ")[0],
        lastName: winnerName.split(" ")[1],
      });

      if (!winner) {
        return res.status(404).json({ message: "Winner details not found" });
      }

      // Respond with winner details and vote count
      return res.json({
        fullName: `${winner.firstName} ${
          winner.middleName ? winner.middleName + " " : ""
        }${winner.lastName}`,
        position: winner.position,
        party: winner.party,
        image: winner.image,
        partyLogo: winner.partyLogo,
        voteCount: maxVotes,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
