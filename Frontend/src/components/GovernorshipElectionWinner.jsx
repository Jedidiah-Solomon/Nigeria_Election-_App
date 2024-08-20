import React, { useEffect, useState } from "react";
import axios from "axios";

const GovernorshipResults = () => {
  const [winner, setWinner] = useState(null);
  const [state, setState] = useState("Rivers"); // Default state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true while fetching
      setError(null); // Reset error state
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/governorship-elections/winner/${state}`
        );
        setWinner(response.data);
      } catch (error) {
        console.error(
          "Error fetching the governorship election winner:",
          error
        );
        setError("Failed to fetch winner data");
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, [state]); // Refetch data when the state changes

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-md">
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
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          winner && (
            <div className="border border-gray-200 p-4 rounded-lg shadow-lg bg-white mx-auto">
              {winner.message === "Multiple winners" ? (
                <div>
                  <h3 className="text-xl font-semibold text-red-500">
                    Multiple winners found:
                  </h3>
                  {winner.winners.map((winner, index) => (
                    <p key={index} className="text-md">
                      {winner.fullName} - {winner.voteCount} votes
                    </p>
                  ))}
                </div>
              ) : (
                <>
                  <img
                    src={winner.image}
                    alt={winner.fullName}
                    className="w-full h-auto rounded-t-lg mb-4 object-cover"
                  />
                  <div className="flex items-center mb-4">
                    <img
                      src={winner.partyLogo}
                      alt={`${winner.party} logo`}
                      className="w-12 h-12 rounded-full border border-gray-300"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-semibold">
                        {winner.fullName}
                      </h3>
                      <p className="text-md">
                        <strong>Position:</strong> {winner.position}
                      </p>
                      <p className="text-md">
                        <strong>Party:</strong> {winner.party}
                      </p>
                      <p className="text-md">
                        <strong>Total Votes:</strong> {winner.voteCount}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default GovernorshipResults;
