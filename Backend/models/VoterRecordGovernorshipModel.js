const mongoose = require("mongoose");

const voterRecordGovernorshipSchema = new mongoose.Schema({
  voterNIN: { type: String, required: true },
  state: { type: String, required: true },
  electionType: { type: String, required: true },
});

const VoterRecordGovernorship = mongoose.model(
  "VoterRecordGovernorship",
  voterRecordGovernorshipSchema
);

module.exports = VoterRecordGovernorship;
