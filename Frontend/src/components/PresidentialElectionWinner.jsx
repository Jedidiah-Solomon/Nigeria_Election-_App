import React, { useEffect, useState } from "react";
import axios from "axios";

const PresidentialElectionWinner = () => {
  const [winner, setWinner] = useState(null);
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
          }/api/presidential-elections/winner`
        );
        setWinner(response.data);
      } catch (error) {
        console.error(
          "Error fetching the presidential election winner:",
          error
        );
        setError("Failed to fetch winner data");
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-md">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : winner && winner.message === "Multiple winners" ? (
          <div className="border border-gray-200 p-4 rounded-lg shadow-lg bg-white mx-auto">
            <h3 className="text-xl font-semibold mb-4">Multiple Winners</h3>
            {winner.winners.map((party, index) => (
              <div key={index} className="flex items-center mb-4">
                <div className="ml-4 flex-1">
                  <p className="text-md">
                    <strong>Party:</strong> {party.party}
                  </p>
                  <p className="text-md">
                    <strong>Total Votes:</strong> {party.voteCount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          winner && (
            <div className="border border-gray-200 p-4 rounded-lg shadow-lg bg-white mx-auto">
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
                  <h3 className="text-xl font-semibold">{winner.fullName}</h3>
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
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PresidentialElectionWinner;
