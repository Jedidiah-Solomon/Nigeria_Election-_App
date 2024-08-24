import React, { useState, useEffect } from "react";
import axios from "axios";

// Utility function to convert a string to sentence case
const toSentenceCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const PresidentialElection = () => {
  const [formData, setFormData] = useState({
    electionName: "Presidential", // Default value
    candidates: [{ firstName: "", lastName: "", position: "", partyName: "" }],
    voterNIN: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Effect to retrieve voterNIN from sessionStorage when component mounts
  useEffect(() => {
    const storedNIN = sessionStorage.getItem("voterNIN");
    if (storedNIN) {
      setFormData((prevData) => ({
        ...prevData,
        voterNIN: storedNIN,
      }));
    }
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: toSentenceCase(value),
    }));
  };

  const handleCandidateChange = (index, e) => {
    const { name, value } = e.target;
    const newCandidates = [...formData.candidates];
    newCandidates[index] = {
      ...newCandidates[index],
      [name]: toSentenceCase(value),
    };
    setFormData((prevData) => ({
      ...prevData,
      candidates: newCandidates,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make sure the data being sent includes voterNIN, electionName, and candidates
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/presidential-elections/create`,
        formData
      );
      console.log("Election created successfully:", response.data);

      // Set success message and reset form
      setSuccessMessage("Voting successful!");
      setErrorMessage("");

      setTimeout(() => {
        setSuccessMessage("");
      }, 10000);

      setFormData({
        electionName: "Presidential",
        candidates: [
          { firstName: "", lastName: "", position: "", partyName: "" },
        ],
        voterNIN: "", // Reset voterNIN
      });
    } catch (error) {
      console.error("Error creating election:", error);

      // Set error message based on error type
      setErrorMessage(
        error.response?.status === 403
          ? "You have already voted in this election."
          : "An error occurred. Please try again."
      );
      setSuccessMessage(""); // Clear any previous success message
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Presidential Election
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="hidden"
          name="electionName"
          value={formData.electionName}
        />
        <input type="hidden" name="voterNIN" value={formData.voterNIN} />

        {formData.candidates.map((candidate, index) => (
          <div key={index} className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">
              First Name:
              <input
                type="text"
                name="firstName"
                placeholder="Enter contestant's first name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={candidate.firstName}
                onChange={(e) => handleCandidateChange(index, e)}
                required
              />
            </label>
            <label className="block text-lg font-medium text-gray-700">
              Last Name:
              <input
                type="text"
                name="lastName"
                placeholder="Enter contestant's last name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={candidate.lastName}
                onChange={(e) => handleCandidateChange(index, e)}
                required
              />
            </label>
            <label className="block text-lg font-medium text-gray-700">
              Position:
              <input
                type="text"
                name="position"
                placeholder="President"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={candidate.position}
                onChange={(e) => handleCandidateChange(index, e)}
                required
              />
            </label>
            <label className="block text-lg font-medium text-gray-700">
              Party Name:
              <input
                type="text"
                name="partyName"
                placeholder="e.g PDP, APC"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={candidate.partyName}
                onChange={(e) => handleCandidateChange(index, e)}
                required
              />
            </label>
          </div>
        ))}

        <button
          type="submit"
          className="bg-customGreen-dark text-white py-2 px-4 rounded"
        >
          Submit Vote
        </button>
      </form>

      {/* Conditionally render the success message */}
      {successMessage && (
        <p className="mt-4 text-green-600 font-semibold text-center">
          {successMessage}
        </p>
      )}

      {/* Conditionally render the error message */}
      {errorMessage && (
        <p className="mt-4 text-red-600 font-semibold text-center">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default PresidentialElection;
