const express = require("express");
const router = express.Router();
const contestantController = require("../controllers/contestantController");

router.post("/", contestantController.createContestant);
router.get("/", contestantController.getContestants);

module.exports = router;
