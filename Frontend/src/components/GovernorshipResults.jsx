import React, { useEffect, useState } from "react";
import axios from "axios";

const GovernorshipResults = () => {
  const [candidates, setCandidates] = useState([]);
  const [state, setState] = useState("Rivers"); // Default state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true while fetching
      try {
        const response = await axios.get(
          `http://localhost:8000/api/governorship-elections/results/${state}`
        );
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching the governorship election data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, [state]); // Refetch data when the state changes

  return (
    <div className="p-6">
      <div className="mb-4">
        <label
          htmlFor="state-select"
          className="block text-lg font-medium mb-2"
        >
          Select State:
        </label>
        <select
          id="state-select"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="Rivers">Rivers</option>
          <option value="Lagos">Lagos</option>
          {/* Add more states as needed */}
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5  min-w-[250px] gap-6 p-6">
          {candidates.map((candidate) => (
            <div
              key={candidate._id}
              className="border border-gray-200 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-white"
            >
              <img
                src={candidate.image}
                alt={candidate.firstName}
                className="w-full h-auto rounded-t-lg mb-4"
              />
              <div className="flex items-center mb-4">
                <img
                  src={candidate.partyLogo}
                  alt={`${candidate.party} logo`}
                  className="w-12 h-12 rounded-full border border-gray-300"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-semibold">
                    {`${candidate.firstName} ${candidate.middleName} ${candidate.lastName}`}
                  </h3>
                  <p className="text-md">
                    <strong>Position:</strong> {candidate.position}
                  </p>
                  <p className="text-md">
                    <strong>Party Name:</strong> {candidate.party}
                  </p>
                  <p className="text-md">
                    <strong>Vote Count:</strong> {candidate.voteCount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GovernorshipResults;
