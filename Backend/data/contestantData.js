require("dotenv").config();

const mongoose = require("mongoose");

const Contestant = require("../models/contestantModel");

const connectDB = require("../config/db");
const data = require("./contestantData.json");

const seedDB = async () => {
  await connectDB();

  try {
    await Contestant.deleteMany();

    await Contestant.insertMany(data.contestants);

    console.log("Database seeded successfully");
    process.exit();
  } catch (error) {
    console.error(`Error seeding database: ${error.message}`);
    process.exit(1);
  }
};

seedDB();

// just run ```node data/contestantData.js```
