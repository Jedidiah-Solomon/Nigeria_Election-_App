require("dotenv").config();

const mongoose = require("mongoose");
const Admin = require("../models/adminModel");
const connectDB = require("../config/db");
const data = require("./seedData-2.json");

const seedDB = async () => {
  await connectDB();

  try {
    // Clear existing data
    await Admin.deleteMany();

    // Insert new data
    await Admin.insertMany(data.admins);

    console.log("Database seeded successfully");
    process.exit();
  } catch (error) {
    console.error(`Error seeding database: ${error.message}`);
    process.exit(1);
  }
};

seedDB();
// just run ```node data/seedData.js```
