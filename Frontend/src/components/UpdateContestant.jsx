import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateContestant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contestant, setContestant] = useState({
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

  useEffect(() => {
    const fetchContestant = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/contestants/${id}`
        );
        setContestant(response.data);
      } catch (error) {
        console.error("Error fetching contestant:", error);
        alert("Error fetching contestant details.");
      }
    };

    fetchContestant();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContestant((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/contestants/${id}`,
        contestant,
        {
          withCredentials: true,
        }
      );
      alert("Contestant updated successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Error updating contestant:", error);
      alert("Error updating contestant.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h4 className="text-2xl font-semibold text-center mb-6">
          Update Contestant
        </h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={contestant.firstName}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            value={contestant.middleName}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={contestant.lastName}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="party"
            placeholder="Party"
            value={contestant.party}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={contestant.position}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="LGA"
            placeholder="LGA"
            value={contestant.LGA}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={contestant.state}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={contestant.country}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={contestant.image}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
          />
          <input
            type="text"
            name="partyLogo"
            placeholder="Party Logo URL"
            value={contestant.partyLogo}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
          />
          <button
            type="submit"
            className="w-full px-3 py-3 mt-4 text-white bg-customGreen-dark rounded-lg hover:bg-customGreen-medium"
          >
            Update Contestant
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateContestant;
