const mongoose = require("mongoose");

const electionSchema = new mongoose.Schema(
  {
    electionName: { type: String, required: true },
    electionType: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, required: true },
    results: [
      {
        contestantId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Contestant",
        },
        votes: { type: Number, default: 0 },
      },
    ],
  },
  { collection: "elections" }
);

const Election = mongoose.model("Election", electionSchema);

module.exports = Election;
