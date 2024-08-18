import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteContestantConfirmation = () => {
  const { id } = useParams(); // Get the contestant ID from the URL
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/contestants/${id}`
      );
      alert("Contestant deleted successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Error deleting contestant:", error);
      alert("Error deleting contestant. Check console for details.");
    }
  };

  const handleCancel = () => {
    navigate("/admin"); // Redirect to admin page if deletion is canceled
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h4 className="text-2xl font-semibold text-center mb-6">
          Confirm Deletion
        </h4>
        <p className="text-center mb-6">
          Are you sure you want to delete this contestant?
        </p>
        <div className="flex justify-around">
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteContestantConfirmation;
