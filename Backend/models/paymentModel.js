const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  reference: { type: String, required: true },
  transaction: { type: String, required: true },
  status: { type: String, required: true },
  message: { type: String, required: true },
  amountInKobo: { type: Number, required: true },
  paymentTime: { type: Date, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
