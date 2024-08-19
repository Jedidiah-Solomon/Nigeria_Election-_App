import React from "react";
import { Link } from "react-router-dom";

const VoterElection = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Vote in the Elections
      </h1>

      <div className="flex justify-center space-x-4">
        {/* Governorship Button */}
        <Link to="/governorship-election">
          <button
            type="button"
            className="bg-customGreen-dark text-white py-2 px-4 rounded"
          >
            Governorship Election
          </button>
        </Link>

        {/* Presidential Button */}
        <Link to="/presidential-election">
          <button
            type="button"
            className="bg-customGreen-dark text-white py-2 px-4 rounded"
          >
            Presidential Election
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VoterElection;
