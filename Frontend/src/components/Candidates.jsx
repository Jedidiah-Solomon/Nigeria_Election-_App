import React, { useEffect, useState } from "react";
import axios from "axios";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [statistics, setStatistics] = useState({
    totalCount: 0,
    presidentialCount: 0,
    governorshipCount: 0,
  });

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/contestants`
        );
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    const fetchStatistics = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/contestants/statistics`
        );
        setStatistics(response.data);
      } catch (error) {
        console.error("Error fetching candidate statistics:", error);
      }
    };

    fetchCandidates();
    fetchStatistics();
  }, []);

  return (
    <main className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Candidates</h2>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <p className="text-md text-center font-semibold text-gray-700 mb-2">
            Total Candidates
          </p>
          <p className="text-xl text-center font-bold text-gray-900">
            {statistics.totalCount}
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <p className="text-md text-center font-semibold text-gray-700 mb-2">
            Total Presidential Candidates
          </p>
          <p className="text-xl text-center font-bold text-gray-900">
            {statistics.presidentialCount}
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <p className="text-md text-center font-semibold text-gray-700 mb-2">
            Total Governorship Candidates
          </p>
          <p className="text-xl text-center font-bold text-gray-900">
            {statistics.governorshipCount}
          </p>
        </div>
      </div>

      {candidates.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {candidates.map((candidate) => (
            <div key={candidate._id} className="border p-4 rounded shadow">
              <div className="flex items-center">
                <img
                  src={candidate.image}
                  alt={candidate.firstName}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    {candidate.firstName} {candidate.middleName}{" "}
                    {candidate.lastName}
                  </h3>
                  <p>{candidate.party}</p>
                  <p>{candidate.position}</p>
                  {candidate.position !== "President" && (
                    <p>{candidate.state}</p>
                  )}
                  <img
                    src={candidate.partyLogo}
                    alt={candidate.party}
                    className="w-8 h-8"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No candidates available.</p>
      )}
    </main>
  );
};

export default Candidates;
