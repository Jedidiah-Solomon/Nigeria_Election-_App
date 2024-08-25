const express = require("express");
const router = express.Router();
const { recordPayment } = require("../controllers/paymentController");

router.post("/record-payment", recordPayment);

module.exports = router;
