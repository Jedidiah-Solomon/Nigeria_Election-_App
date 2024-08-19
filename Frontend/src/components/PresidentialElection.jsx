import React, { useState } from "react";
import axios from "axios";

// Utility function to convert a string to sentence case
const toSentenceCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const PresidentialElection = () => {
  const [formData, setFormData] = useState({
    electionName: "Presidential", // Set default value
    candidates: [{ firstName: "", lastName: "", position: "", partyName: "" }],
  });

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
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/presidential-elections/create`,
        formData
      );
      console.log("Election created successfully:", response.data);

      // Reset the form after successful submission
      setFormData({
        electionName: "Presidential",
        candidates: [
          { firstName: "", lastName: "", position: "", partyName: "" },
        ],
      });
    } catch (error) {
      console.error("Error creating election:", error);
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
    </div>
  );
};

export default PresidentialElection;
