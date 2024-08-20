import React from "react";
import GovernorshipElectionWinner from "./GovernorshipElectionWinner";
import PresidentialElectionWinner from "./PresidentialElectionWinner";

const Winners = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">
          Presidential Election Winner
        </h1>
        <p className="text-lg mb-4">
          Here you can view the results for the Presidential election. The
          winner of the presidential election is displayed below with their
          details, including the number of votes received.
        </p>
        <PresidentialElectionWinner />
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4">
          Governorship Election Winner
        </h1>
        <p className="text-lg mb-4">
          Below are the results for the Governorship election. The winner of the
          governorship election is shown here along with their information and
          the votes they received. Select any state to see their winner.
        </p>
        <GovernorshipElectionWinner />
      </div>
    </div>
  );
};

export default Winners;
