const express = require("express");
const router = express.Router();
const partyController = require("../controllers/partyController");

// Route to create a new party
router.post("/", partyController.createParty);

// Route to get all parties
router.get("/", partyController.getParties);

// Route to update a party by ID
router.put("/:id", partyController.updateParty);

// Route to delete a party by ID
router.delete("/:id", partyController.deleteParty);

module.exports = router;
