import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden text-center">
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            404 - Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="text-customGreen-dark font-bold hover:underline"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
