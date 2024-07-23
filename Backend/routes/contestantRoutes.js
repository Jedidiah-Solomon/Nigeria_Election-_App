const express = require("express");
const router = express.Router();
const contestantController = require("../controllers/contestantController");

router.post("/contestants", contestantController.createContestant);
router.get("/contestants", contestantController.getContestants);

module.exports = router;
