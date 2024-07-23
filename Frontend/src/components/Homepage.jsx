import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUsers,
  FaMapPin,
  FaRegBuilding,
  FaCalendarAlt,
} from "react-icons/fa";

const Homepage = () => {
  const [voterCount, setVoterCount] = useState(0);

  useEffect(() => {
    const fetchVoterCount = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/voters/count"
        );
        setVoterCount(response.data.count);
      } catch (error) {
        console.error("Error fetching voter count:", error);
      }
    };

    fetchVoterCount();
  }, []);

  return (
    <main className="container mx-auto p-4">
      <h2 className="text-md laptop:text-4xl text-center font-bold mb-4">
        Welcome to Nigeria Election App
      </h2>
      <p className="mb-4 text-center">
        Participate in upcoming elections and make your voice heard!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Counter 1: Registered Voters */}
        <div className="p-4 bg-white shadow-md rounded flex items-center space-x-4">
          <div className="text-3xl text-green-600">
            <FaUsers />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Registered Voters</h3>
            <p className="text-lg">{voterCount.toLocaleString()}</p>
          </div>
        </div>
        {/* Counter 2: Polling Units */}
        <div className="p-4 bg-white shadow-md rounded flex items-center space-x-4">
          <div className="text-3xl text-blue-600">
            <FaMapPin />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Polling Units</h3>
            <p className="text-lg">176,846</p>
          </div>
        </div>
        {/* Counter 3: Registered Parties */}
        <div className="p-4 bg-white shadow-md rounded flex items-center space-x-4">
          <div className="text-3xl text-red-600">
            <FaRegBuilding />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Registered Parties</h3>
            <p className="text-lg">10</p>
          </div>
        </div>
        {/* Counter 4: Next Election */}
        <div className="p-4 bg-white shadow-md rounded flex items-center space-x-4">
          <div className="text-3xl text-yellow-600">
            <FaCalendarAlt />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Next Election</h3>
            <p className="text-lg">Nov 11, 2024</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow-md rounded">
          <h3 className="text-xl font-semibold mb-2">Upcoming Elections</h3>
          <p>Stay informed about upcoming elections in your area.</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded">
          <h3 className="text-xl font-semibold mb-2">Candidates</h3>
          <p>Learn more about the candidates and their positions.</p>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
