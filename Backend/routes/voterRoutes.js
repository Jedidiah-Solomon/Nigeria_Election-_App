const express = require("express");
const router = express.Router();
const voterController = require("../controllers/voterController");

router.post("/", voterController.createVoter);
router.get("/", voterController.getVoters);
router.get("/count", voterController.getVoterCount);

module.exports = router;
