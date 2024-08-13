import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateVoter = () => {
  const { id } = useParams(); // Get the voter ID from the URL parameters
  const navigate = useNavigate(); // To redirect after successful update
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

  useEffect(() => {
    const fetchVoter = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/voters/${id}`
        );
        setVoter(response.data);
      } catch (error) {
        console.error("Error fetching voter:", error);
        alert("Error fetching voter details.");
      }
    };

    fetchVoter();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoter((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/voters/${id}`, voter, {
        withCredentials: true,
      });
      alert("Voter updated successfully!");
      navigate("/admin"); // Redirect to admin page or any other page
    } catch (error) {
      console.error("Error updating voter:", error);
      alert("Error updating voter.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h4 className="text-2xl font-semibold text-center mb-6">
          Update Voter
        </h4>
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
          {/* Other fields */}
          <button
            type="submit"
            className="w-full px-3 py-3 mt-4 text-white bg-customGreen-dark rounded-lg hover:bg-customGreen-medium focus:outline-none focus:ring focus:ring-customGreen-medium"
          >
            Update Voter
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateVoter;
