require("dotenv").config();
const mongoose = require("mongoose");
const GovernorshipData = require("../models/governorshipElectionModel");
const PresidentialData = require("../models/presidentialElectionModel");
const connectDB = require("../config/db");
const data = require("./seedData-3.json");

const seedDB = async () => {
  await connectDB();

  try {
    // Insert new data for governorship and presidential elections
    await GovernorshipData.insertMany(data.governorshipElections);
    await PresidentialData.insertMany(data.presidentialElections);

    console.log("Database seeded successfully");
    process.exit();
  } catch (error) {
    console.error(`Error seeding database: ${error.message}`);
    process.exit(1);
  }
};

seedDB();

// just run ```node data/seedData-3.js```
