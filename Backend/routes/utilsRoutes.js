require("dotenv").config();
const express = require("express");
const router = express.Router();
const utilsController = require("../controllers/utilsController");

// Route to use utils functions
router.post("/", utilsController.utilsControllerFunction);

module.exports = router;
