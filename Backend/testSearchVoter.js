const mongoose = require("mongoose");
const Voter = require("./models/voterModel"); // Adjust path as needed
require("dotenv").config();

// Connect to the database
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_URI); // Ensure .env file is configured with MONGODB_URI
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};

// Function to search for a voter
const searchVoter = async (query) => {
  try {
    const voter = await Voter.findOne(query);
    if (voter) {
      console.log("Voter found:", voter);
    } else {
      console.log("No voter found with these details.");
    }
  } catch (error) {
    console.error("Error searching for voter:", error);
  }
};

// Main function to run the test
const main = async () => {
  await connectDB();

  // Example queries to test
  const queries = [
    { firstName: "Olivia" },
    { email: "olivia.johnson@example.com" },
    { NIN: "234567890123456" },
  ];

  // Run searches
  for (const query of queries) {
    console.log(`Searching with query: ${JSON.stringify(query)}`);
    await searchVoter(query);
  }

  // Close the database connection after all queries
  mongoose.connection.close();
};

main();
