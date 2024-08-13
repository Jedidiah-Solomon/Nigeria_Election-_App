const express = require("express");
const router = express.Router();
const contestantController = require("../controllers/contestantController");
const { requireAuth, requireAdmin } = require("../middleware/authMiddleware");
const { validateContestant } = require("../middleware/validationMiddleware");

// Apply authentication, authorization, and validation middleware
router.post(
  "/",
  requireAuth,
  requireAdmin,
  validateContestant,
  contestantController.createContestant
);
router.get("/", contestantController.getContestants);
router.put(
  "/:id",
  requireAuth,
  requireAdmin,
  validateContestant,
  contestantController.updateContestant
);
router.delete(
  "/:id",
  requireAuth,
  requireAdmin,
  contestantController.deleteContestant
);

module.exports = router;
