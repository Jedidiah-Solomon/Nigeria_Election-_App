const express = require("express");
const router = express.Router();
const {
  createGovernorshipElection,
  getGovernorshipElectionData,
  getGovernorshipElectionWinner,
} = require("../controllers/governorshipElectionController");

// Route to create a new governorship election
router.post("/create", createGovernorshipElection);

// Route to get governorship election data by state
router.get("/results/:state", getGovernorshipElectionData);

// Route to get the winner of the governorship election by state
router.get("/winner/:state", getGovernorshipElectionWinner);

module.exports = router;
