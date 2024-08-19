import React, { useEffect, useState } from "react";
import axios from "axios";

const PresidentialResults = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Fetch the data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/presidential-elections/results"
        );
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching the presidential election data:", error);
      }
    };

    fetchData();
  }, []);

  return (
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
  );
};

export default PresidentialResults;
