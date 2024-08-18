import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContestantSearch = () => {
  const [searchParams, setSearchParams] = useState({
    firstName: "",
    lastName: "",
    party: "",
    position: "",
  });
  const [contestant, setContestant] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/contestants/search`,
        { params: searchParams }
      );
      if (response.data) {
        setContestant(response.data);
        navigate(`/admin/update-contestant/${response.data._id}`);
      } else {
        alert("No contestant found with these details.");
      }
    } catch (error) {
      console.error("Error searching for contestant:", error);
      alert("Error searching for contestant. Check console for details.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h4 className="text-2xl font-semibold text-center mb-6">
          Search for Contestant to Update
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
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={searchParams.lastName}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="party"
            placeholder="Party"
            value={searchParams.party}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={searchParams.position}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
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

export default ContestantSearch;
