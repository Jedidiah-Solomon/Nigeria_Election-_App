const express = require("express");
const router = express.Router();
const contestantController = require("../controllers/contestantController");
const { validateContestant } = require("../middleware/validationMiddleware");

router.post("/", validateContestant, contestantController.createContestant);
router.get("/", contestantController.getContestants);
router.get("/statistics", contestantController.getCandidateStatistics);
router.get("/count", contestantController.getContestantCount);
router.get("/search", contestantController.searchContestant);
router.get("/:id", contestantController.getContestantById);
router.put("/:id", validateContestant, contestantController.updateContestant);
router.delete("/:id", contestantController.deleteContestant);

module.exports = router;
