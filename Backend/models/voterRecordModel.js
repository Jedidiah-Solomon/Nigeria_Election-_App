const mongoose = require("mongoose");

const voterRecordSchema = new mongoose.Schema(
  {
    voterNIN: { type: String, required: true, unique: true },
    electionType: { type: String, required: true },
  },
  { collection: "voterRecords" }
);

const VoterRecord = mongoose.model("VoterRecord", voterRecordSchema);

module.exports = VoterRecord;
