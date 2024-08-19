const mongoose = require("mongoose");

const presidentialElectionSchema = new mongoose.Schema(
  {
    electionName: { type: String, required: true },
    candidates: [
      {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        position: { type: String, required: true },
        partyName: { type: String, required: true },
      },
    ],
  },
  { collection: "presidentialElections" }
);

const PresidentialElection = mongoose.model(
  "PresidentialElection",
  presidentialElectionSchema
);

module.exports = PresidentialElection;
