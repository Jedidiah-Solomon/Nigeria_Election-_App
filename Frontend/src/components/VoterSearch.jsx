import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VoterSearch = () => {
  const [searchParams, setSearchParams] = useState({
    firstName: "",
    email: "",
    NIN: "",
  });
  const [voter, setVoter] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8000/api/voters/search`,
        { params: searchParams }
      );
      if (response.data) {
        setVoter(response.data);
        navigate(`/admin/update-voter/${response.data._id}`);
      } else {
        alert("No voter found with these details.");
      }
    } catch (error) {
      console.error("Error searching for voter:", error);
      alert("Error searching for voter. Check console for details.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h4 className="text-2xl font-semibold text-center mb-6">
          Search for Voter
        </h4>
        <form onSubmit={handleSearch} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={searchParams.firstName}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={searchParams.email}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
          />
          <input
            type="text"
            name="NIN"
            placeholder="NIN"
            value={searchParams.NIN}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
          />
          <button
            type="submit"
            className="w-full px-3 py-3 mt-4 text-white bg-customGreen-dark rounded-lg hover:bg-customGreen-medium"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default VoterSearch;
