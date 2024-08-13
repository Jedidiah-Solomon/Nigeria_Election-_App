require("dotenv").config();
const express = require("express");
const router = express.Router();
const voterController = require("../controllers/voterController");
// const { requireAuth, requireAdmin } = require("../middleware/authMiddleware");

// Route to create a new voter
router.post("/", voterController.createVoter);

// Route to get all voters
router.get("/", voterController.getVoters);

// Route to get the count of voters
router.get("/count", voterController.getVoterCount);

// Route to update a voter by ID
router.put("/:id", voterController.updateVoter);

// Get a voter by ID
router.get("/:id", voterController.getVoterById);

// Route to delete a voter by ID
router.delete("/:id", voterController.deleteVoter);

// Route to search for a voter
router.get("/search", voterController.searchVoter);

module.exports = router;
