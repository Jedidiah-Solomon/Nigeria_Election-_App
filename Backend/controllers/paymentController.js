const Payment = require("../models/paymentModel");

exports.recordPayment = async (req, res) => {
  try {
    const {
      reference,
      transaction,
      status,
      message,
      amountInKobo,
      paymentTime,
      name,
      email,
    } = req.body;

    // Create and save payment record
    const payment = new Payment({
      reference,
      transaction,
      status,
      message,
      amountInKobo,
      paymentTime,
      name,
      email,
    });

    await payment.save();

    res.status(200).json({ message: "Payment recorded successfully" });
  } catch (error) {
    console.error("Error recording payment:", error);
    res.status(500).json({ message: "Error recording payment", error });
  }
};
