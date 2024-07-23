const mongoose = require("mongoose");

const voterSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    pollingUnit: { type: String, required: true },
    LGA: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    NIN: { type: String, required: true, unique: true },
  },
  { collection: "voters" }
);

const Voter = mongoose.model("Voter", voterSchema);

module.exports = Voter;
