import React, { useState } from "react";
import axios from "axios";

const AddContestant = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContestant((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/contestants", contestant, {
        withCredentials: true,
      });
      alert("Contestant added successfully!");
      setContestant({
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
    } catch (error) {
      console.error("Error adding contestant:", error);
      alert("Error adding contestant.");
    }
  };

  return (
    <div className="mb-8">
      <h4 className="text-lg font-semibold mb-2">Add Contestant</h4>
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
          Add Contestant
        </button>
      </form>
    </div>
  );
};

export default AddContestant;
