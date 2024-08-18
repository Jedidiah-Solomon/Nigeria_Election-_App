require("dotenv").config();
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Route to login admin
router.post("/login", adminController.loginAdmin);

router.post("/", adminController.createAdmin);
router.get("/", adminController.getAdmins);
router.put("/:id", adminController.updateAdmin);
router.delete("/:id", adminController.deleteAdmin);

module.exports = router;
