require("dotenv").config();

const mongoose = require("mongoose");
const Voter = require("../models/voterModel");
const Contestant = require("../models/contestantModel");
// const Election = require("../models/electionModel");

const connectDB = require("../config/db");
const data = require("./seedData.json");

const seedDB = async () => {
  await connectDB();

  try {
    await Voter.deleteMany();
    await Contestant.deleteMany();
    // await Election.deleteMany();

    await Voter.insertMany(data.voters);
    await Contestant.insertMany(data.contestants);
    // await Election.insertMany(data.elections);

    console.log("Database seeded successfully");
    process.exit();
  } catch (error) {
    console.error(`Error seeding database: ${error.message}`);
    process.exit(1);
  }
};

seedDB();

// just run ```node data/seedData.js```
