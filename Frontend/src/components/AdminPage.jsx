import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  // Retrieve the admin's first name from sessionStorage
  const firstName = sessionStorage.getItem("adminFirstName");

  // Determine the current time of day
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  const greeting = firstName ? `${getGreeting()}, ${firstName}` : "Welcome";

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p className="mb-6">{greeting}✍️</p>
      <p className="mb-6">
        Welcome to the Admin Dashboard. Manage the contestants and voters.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Contestants Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Manage Contestants</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/admin/add-contestant"
                className="block px-4 py-2 bg-customGreen-dark text-white rounded hover:bg-customGreen-medium"
              >
                Add Contestant
              </Link>
            </li>
            <li>
              <Link
                to="/admin/update-contestant"
                className="block px-4 py-2 bg-customGreen-dark text-white rounded hover:bg-customGreen-medium"
              >
                Update Contestant
              </Link>
            </li>
            <li>
              <Link
                to="/admin/delete-contestant"
                className="block px-4 py-2 bg-customGreen-dark text-white rounded hover:bg-customGreen-medium"
              >
                Delete Contestant
              </Link>
            </li>
          </ul>
        </div>

        {/* Voters Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Manage Voters</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/admin/add-voter"
                className="block px-4 py-2 bg-customGreen-dark text-white rounded hover:bg-customGreen-medium"
              >
                Add Voter
              </Link>
            </li>
            <li>
              <Link
                to="/admin/search-voter"
                className="block px-4 py-2 bg-customGreen-dark text-white rounded hover:bg-customGreen-medium"
              >
                Update Voter
              </Link>
            </li>
            <li>
              <Link
                to="/admin/delete-voter"
                className="block px-4 py-2 bg-customGreen-dark text-white rounded hover:bg-customGreen-medium"
              >
                Delete Voter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
