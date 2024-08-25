import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import axios from "axios";

const BuyMeCoffeeModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Minimum amount check
    if (formData.amount < 100) {
      alert("The minimum amount is ₦100.");
      return;
    }
  };

  const handlePaystackSuccess = async (reference) => {
    console.log("Payment successful", reference);

    const amountInKobo = formData.amount * 100;
    const paymentTime = new Date().toISOString();

    const paymentData = {
      reference: reference.trxref,
      transaction: reference.trans,
      status: reference.status,
      message: reference.message,
      amountInKobo,
      paymentTime,
      name: formData.name,
      email: formData.email,
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/payments/record-payment`,
        paymentData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Payment details saved successfully");
      alert("Payment was successful!");
    } catch (error) {
      console.error("Error saving payment details:", error);
    }

    onClose();
  };

  const handlePaystackClose = () => {
    console.log("Payment modal closed");
  };

  const amountInKobo = formData.amount * 100;
  const paymentTime = new Date().toISOString();

  const componentProps = {
    email: formData.email,
    amount: amountInKobo,
    publicKey,
    text: "Pay Now👌",
    onSuccess: handlePaystackSuccess,
    onClose: handlePaystackClose,
    metadata: {
      name: formData.name,
      PaymentTime: paymentTime,
      WebsiteSource: "Naija Election App",
    },
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Buy Me Coffee🤝
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Amount (NGN)</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                min="100"
                required
              />
            </div>
            <div>
              <PaystackButton
                {...componentProps}
                className="w-full bg-green-500 text-white p-2 rounded"
                disabled={formData.amount < 100}
              />
            </div>
          </form>
          <button
            onClick={onClose}
            className="mt-4 w-full bg-red-500 text-white p-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    )
  );
};

export default BuyMeCoffeeModal;
