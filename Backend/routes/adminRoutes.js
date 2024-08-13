require("dotenv").config();
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { requireAuth, requireAdmin } = require("../middleware/authMiddleware");

// Route to login admin
router.post("/login", adminController.loginAdmin);

// Apply authentication and authorization middleware for other routes
router.post("/", requireAuth, requireAdmin, adminController.createAdmin);
router.get("/", requireAuth, requireAdmin, adminController.getAdmins);
router.put("/:id", requireAuth, requireAdmin, adminController.updateAdmin);
router.delete("/:id", requireAuth, requireAdmin, adminController.deleteAdmin);

module.exports = router;
