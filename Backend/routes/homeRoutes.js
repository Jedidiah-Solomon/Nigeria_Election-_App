const express = require("express");
const router = express.Router();

const { home } = require("../controllers/homeController");

// Route to home point
router.get("/", home);

module.exports = router;
