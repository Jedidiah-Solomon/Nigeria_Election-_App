import React, { useState, useEffect } from "react";
import axios from "axios";

const AddVoter = () => {
  const [voter, setVoter] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    pollingUnit: "",
    LGA: "",
    state: "",
    country: "",
    NIN: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        // Get the admin's firstName from session storage
        const sessionFirstName = sessionStorage.getItem("adminFirstName");

        if (!sessionFirstName) {
          alert("Unauthorized: No firstName found in session.");
          return;
        }

        // Get all admins from the backend
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/admin/`,
          {
            withCredentials: true,
          }
        );

        const admins = response.data;

        // Check if any admin's firstName matches the session's firstName
        const adminExists = admins.some(
          (admin) => admin.firstName === sessionFirstName
        );

        if (adminExists) {
          setIsAdmin(true);
        } else {
          alert("Unauthorized: Admin not found.");
        }
      } catch (error) {
        console.error("Error verifying admin:", error);
        alert("Error verifying admin.");
      }
    };

    checkAdminStatus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoter((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAdmin) {
      alert("Unauthorized: Admin verification failed.");
      return;
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/voters`,
        voter,
        {
          withCredentials: true,
        }
      );
      alert("Voter added successfully!");
      setVoter({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        pollingUnit: "",
        LGA: "",
        state: "",
        country: "",
        NIN: "",
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
            name="pollingUnit"
            placeholder="Polling Unit"
            value={voter.pollingUnit}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen-medium"
            required
          />
          <input
            type="text"
            name="LGA"
            placeholder="LGA"
            value={voter.LGA}
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
          <input
            type="text"
            name="NIN"
            placeholder="NIN"
            value={voter.NIN}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen-medium"
            required
          />
          <button
            type="submit"
            className="w-full bg-customGreen-medium text-white p-3 rounded-lg hover:bg-customGreen-dark"
            disabled={!isAdmin}
          >
            Add Voter
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVoter;
