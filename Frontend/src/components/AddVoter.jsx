import React, { useState } from "react";
import axios from "axios";

const AddVoter = () => {
  const [voter, setVoter] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoter((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/voters", voter, {
        withCredentials: true,
      });
      alert("Voter added successfully!");
      setVoter({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        state: "",
        country: "",
      });
    } catch (error) {
      console.error("Error adding voter:", error);
      alert("Error adding voter.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h4 className="text-2xl font-semibold text-center mb-6">Add Voter</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={voter.firstName}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen-medium"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={voter.lastName}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen-medium"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={voter.email}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen-medium"
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={voter.phoneNumber}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen-medium"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={voter.address}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen-medium"
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={voter.state}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen-medium"
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={voter.country}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen-medium"
            required
          />
          <button
            type="submit"
            className="w-full px-3 py-3 mt-4 text-white bg-customGreen-dark rounded-lg hover:bg-customGreen-medium focus:outline-none focus:ring focus:ring-customGreen-medium"
          >
            Add Voter
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVoter;
