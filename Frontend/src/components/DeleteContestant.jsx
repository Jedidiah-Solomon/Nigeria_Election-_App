import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteContestant = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/contestants/${id}`, {
        withCredentials: true,
      });
      alert("Contestant deleted successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Error deleting contestant:", error);
      alert("Error deleting contestant.");
    }
  };

  return (
    <div className="mb-8">
      <h4 className="text-lg font-semibold mb-2">Delete Contestant</h4>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Delete Contestant
      </button>
    </div>
  );
};

export default DeleteContestant;
