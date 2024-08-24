import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VoterRegistration = () => {
  const [voterData, setVoterData] = useState({
    firstName: "",
    lastName: "",
    NIN: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    setVoterData({ ...voterData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedVoterData = {
      firstName: voterData.firstName.trim(),
      lastName: voterData.lastName.trim(),
      NIN: voterData.NIN.trim(),
    };

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/voters/search-by-nin`,
        { params: trimmedVoterData }
      );

      console.log("Response received:", response);

      if (response.status === 200 && response.data) {
        // Save the NIN in sessionStorage
        sessionStorage.setItem("voterNIN", trimmedVoterData.NIN);
        // Set success message
        setSuccessMessage("Login successful!");

        // Delay navigation to show success message
        setTimeout(() => {
          navigate("/voter-election");
        }, 2000);
      }
    } catch (error) {
      console.error(
        "Error searching for voter:",
        error.response ? error.response.data : error.message
      );
      if (error.response && error.response.status === 404) {
        setErrorMessage("Voter not found. Please check your details.");
      } else {
        setErrorMessage(
          "An error occurred while searching for the voter. Please try again later."
        );
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">
          Voter Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              value={voterData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              value={voterData.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              NIN:
            </label>
            <input
              type="text"
              name="NIN"
              value={voterData.NIN}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {errorMessage && (
            <div className="text-red-500 text-sm mb-4 text-center">
              {errorMessage}
            </div>
          )}

          {successMessage && (
            <p className="mt-4 text-green-600 font-semibold text-center">
              {successMessage}
            </p>
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-customGreen-dark rounded-lg hover:bg-customGreen-medium focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default VoterRegistration;
