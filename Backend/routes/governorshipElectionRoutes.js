const express = require("express");
const router = express.Router();
const {
  createGovernorshipElection,
  getGovernorshipElectionData,
} = require("../controllers/governorshipElectionController");

// Route to create a new governorship election
router.post("/create", createGovernorshipElection);

// Route to get governorship election data by state
router.get("/results/:state", getGovernorshipElectionData);

module.exports = router;
