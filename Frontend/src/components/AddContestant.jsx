import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddContestant = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    party: "",
    position: "",
    LGA: "",
    state: "",
    country: "",
    image: "",
    partyLogo: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/contestants`,
        formData
      );
      if (response.status === 201) {
        alert("Contestant created successfully!");
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error creating contestant:", error);
      alert("There was an error creating the contestant. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h4 className="text-2xl font-semibold text-center mb-6">
          Add Contestant
        </h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            value={formData.middleName}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="party"
            placeholder="Party"
            value={formData.party}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={formData.position}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="LGA"
            placeholder="LGA"
            value={formData.LGA}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
          />
          <input
            type="text"
            name="partyLogo"
            placeholder="Party Logo URL"
            value={formData.partyLogo}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
          />
          <button
            type="submit"
            className="w-full px-3 py-3 mt-4 text-white bg-customGreen-dark rounded-lg hover:bg-customGreen-medium"
          >
            Add Contestant
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContestant;
