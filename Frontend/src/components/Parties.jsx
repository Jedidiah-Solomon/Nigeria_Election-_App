import React, { useEffect, useState } from "react";
import axios from "axios";

const Parties = () => {
  const [parties, setParties] = useState([]);

  useEffect(() => {
    const fetchParties = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/parties");
        setParties(response.data);
      } catch (error) {
        console.error("Error fetching parties:", error);
      }
    };

    fetchParties();
  }, []);

  return (
    <main className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Parties</h2>
      {parties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {parties.map((party) => (
            <div key={party._id} className="border p-4 rounded shadow">
              <div className="flex items-center mb-4">
                <img
                  src={party.logo_url}
                  alt={party.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{party.name}</h3>
                  <p>
                    <strong>Acronym:</strong> {party.acronym}
                  </p>
                  <p>
                    <strong>Founded:</strong> {party.founded}
                  </p>
                  <p>
                    <strong>Chairperson:</strong> {party.chairperson}
                  </p>
                  <p>
                    <strong>Position:</strong> {party.position}
                  </p>
                  <p>
                    <strong>Ideology:</strong> {party.ideology.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No parties found.</p>
      )}
    </main>
  );
};

export default Parties;
