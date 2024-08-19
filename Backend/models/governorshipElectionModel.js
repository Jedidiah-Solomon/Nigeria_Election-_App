const mongoose = require("mongoose");

const governorshipElectionSchema = new mongoose.Schema(
  {
    electionName: { type: String, required: true },
    state: { type: String, required: true }, // State in which the election is held
    candidates: [
      {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        position: { type: String, required: true },
        partyName: { type: String, required: true },
      },
    ],
  },
  { collection: "governorshipElections" }
);

const GovernorshipElection = mongoose.model(
  "GovernorshipElection",
  governorshipElectionSchema
);

module.exports = GovernorshipElection;
