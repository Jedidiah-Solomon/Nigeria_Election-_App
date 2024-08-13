import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteVoter = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/voters/${id}`, {
        withCredentials: true,
      });
      alert("Voter deleted successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Error deleting voter:", error);
      alert("Error deleting voter.");
    }
  };

  return (
    <div className="mb-8">
      <h4 className="text-lg font-semibold mb-2">Delete Voter</h4>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Delete Voter
      </button>
    </div>
  );
};

export default DeleteVoter;
