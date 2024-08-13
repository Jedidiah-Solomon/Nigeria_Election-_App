import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateContestant = () => {
  const { id } = useParams();
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
          `http://localhost:8000/api/contestants/${id}`,
          {
            withCredentials: true,
          }
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
        `http://localhost:8000/api/contestants/${id}`,
        contestant,
        {
          withCredentials: true,
        }
      );
      alert("Contestant updated successfully!");
    } catch (error) {
      console.error("Error updating contestant:", error);
      alert("Error updating contestant.");
    }
  };

  return (
    <div className="mb-8">
      <h4 className="text-lg font-semibold mb-2">Update Contestant</h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={contestant.firstName}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="middleName"
          placeholder="Middle Name (Optional)"
          value={contestant.middleName}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={contestant.lastName}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="party"
          placeholder="Party"
          value={contestant.party}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={contestant.position}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="LGA"
          placeholder="LGA"
          value={contestant.LGA}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={contestant.state}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={contestant.country}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL (Optional)"
          value={contestant.image}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="partyLogo"
          placeholder="Party Logo URL (Optional)"
          value={contestant.partyLogo}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Contestant
        </button>
      </form>
    </div>
  );
};

export default UpdateContestant;
