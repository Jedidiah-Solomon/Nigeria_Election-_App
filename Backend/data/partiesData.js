require("dotenv").config();

const mongoose = require("mongoose");

const Party = require("../models/partyModel");

const connectDB = require("../config/db");
const data = require("./partiesData.json");

const seedDB = async () => {
  await connectDB();

  try {
    await Party.deleteMany();

    await Party.insertMany(data.parties);

    console.log("Database seeded successfully");
    process.exit();
  } catch (error) {
    console.error(`Error seeding database: ${error.message}`);
    process.exit(1);
  }
};

seedDB();

// just run ```node data/partiesData.js```
