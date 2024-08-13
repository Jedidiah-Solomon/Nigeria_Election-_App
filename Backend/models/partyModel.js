const mongoose = require("mongoose");

const electedSeatsSchema = new mongoose.Schema({
  president: { type: Number, required: true },
  senate: { type: Number, required: true },
  house_of_representatives: { type: Number, required: true },
  governors: { type: Number, required: true },
  house_of_assembly: { type: Number, required: true },
  lga: { type: Number, required: true },
});

const partySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    acronym: { type: String, required: true },
    founded: { type: Number, required: true },
    chairperson: { type: String, required: true },
    position: { type: String, required: true },
    ideology: { type: [String], required: true },
    elected_seats: { type: electedSeatsSchema, required: true },
    logo_url: { type: String, required: true },
  },
  { collection: "parties" }
);

const Party = mongoose.model("Party", partySchema);

module.exports = Party;
