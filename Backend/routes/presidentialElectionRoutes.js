const express = require("express");
const router = express.Router();
const {
  createPresidentialElection,
  getPresidentialElectionData,
} = require("../controllers/presidentialElectionController");

// Route to create a new presidential election
router.post("/create", createPresidentialElection);

// Route to get presidential election data
router.get("/results", getPresidentialElectionData);

module.exports = router;
