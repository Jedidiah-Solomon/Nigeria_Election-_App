import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaExclamationTriangle,
  FaVoteYea,
  FaCalendarAlt,
} from "react-icons/fa";

const VoterPage = () => {
  const [greeting, setGreeting] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour < 17) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  const handleAddVoter = () => {
    navigate("/voter-registration");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          {greeting}, dear voter!
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          We are preparing for important elections. Please take note of the
          following details and precautions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Election Details Card */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <FaCalendarAlt className="text-blue-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Election Details
            </h3>
            <p className="mt-4 text-gray-700">
              <strong>Presidential Election 2024:</strong> This election will
              decide the next President of Nigeria.
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Governorship Elections 2024:</strong> Key elections will
              be held in:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
              <li>Lagos State</li>
              <li>Rivers State</li>
            </ul>
          </div>

          {/* Voting Precautions Card */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <FaExclamationTriangle className="text-yellow-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Voting Precautions
            </h3>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li className="flex items-start mt-2">
                <FaVoteYea className="text-green-500 text-lg mr-2" />
                <span>Voting is a civic duty. Ensure you participate.</span>
              </li>
              <li className="flex items-start mt-2">
                <FaVoteYea className="text-green-500 text-lg mr-2" />
                <span>
                  Avoid any form of bribery or corruption. Vote according to
                  your conscience.
                </span>
              </li>
              <li className="flex items-start mt-2">
                <FaVoteYea className="text-green-500 text-lg mr-2" />
                <span>
                  Be informed about the candidates and their platforms. Make
                  educated choices.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={handleAddVoter}
          className="w-full text-lg px-4 py-2 mt-8 text-white bg-customGreen-medium rounded-lg hover:bg-customGreen-dark focus:outline-none focus:ring focus:ring-blue-300"
        >
          Vote
        </button>
      </div>
    </div>
  );
};

export default VoterPage;
