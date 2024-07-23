const express = require("express");
const router = express.Router();
const electionController = require("../controllers/electionController");

router.post("/elections", electionController.createElection);
router.get("/elections", electionController.getElections);

module.exports = router;
