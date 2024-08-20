require("dotenv").config();

const mongoose = require("mongoose");

const GovernorshipElection = require("../models/governorshipElectionModel");

const connectDB = require("../config/db");
const data = require("./voterElectionData.json");

const seedDB = async () => {
  await connectDB();

  try {
    await GovernorshipElection.insertMany(data.governorship);

    console.log("Database seeded successfully");
    process.exit();
  } catch (error) {
    console.error(`Error seeding database: ${error.message}`);
    process.exit(1);
  }
};

seedDB();

// just run ```node data/voterElectionData.js```
