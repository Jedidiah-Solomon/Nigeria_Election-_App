const mongoose = require("mongoose");

const contestantSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
    party: { type: String, required: true },
    position: { type: String, required: true },
    LGA: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    image: { type: String, required: false },
    partyLogo: { type: String, required: false },
  },
  { collection: "contestants" }
);

// Check if the model is already compiled to avoid OverwriteModelError
const Contestant =
  mongoose.models.Contestant || mongoose.model("Contestant", contestantSchema);

module.exports = Contestant;
