import React, { useState } from "react";
import PresidentialResults from "./PresidentialResults";
import GovernorshipResults from "./GovernorshipResults";
import Countdown from "./Countdown";

const Elections = () => {
  const [view, setView] = useState("presidential");

  return (
    <main className="container mx-auto p-4">
      <Countdown />
      <h2 className="text-2xl font-bold mb-4">Elections</h2>
      <p>
        Information about the ongoing elections will be available here
        real-time.
      </p>

      {/* Buttons to switch between views */}
      <div className="mb-4">
        <button
          onClick={() => setView("presidential")}
          className={`px-4 py-2 mr-2 border rounded ${
            view === "presidential"
              ? "bg-customGreen-dark text-white"
              : "bg-white text-customGreen-dark"
          }`}
        >
          Presidential Results
        </button>
        <button
          onClick={() => setView("governorship")}
          className={`px-4 py-2 border rounded ${
            view === "governorship"
              ? "bg-customGreen-dark text-white"
              : "bg-white text-customGreen-dark"
          }`}
        >
          Governorship Results
        </button>
      </div>

      {/* Conditional rendering based on selected view */}
      {view === "presidential" && <PresidentialResults />}
      {view === "governorship" && <GovernorshipResults />}
    </main>
  );
};

export default Elections;
