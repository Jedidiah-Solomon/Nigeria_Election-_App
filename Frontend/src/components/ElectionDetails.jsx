import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ElectionDetails = () => {
  const [formattedData, setFormattedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/utils`,
          {
            title: "nigeria elections 2024",
            date: "2024-11-11",
            description:
              "The upcoming Nigeria Elections 2024 are expected to be one of the most significant elections in the country's history, with multiple candidates vying for the presidency. This election will determine the future direction of the country for years to come, and it has generated a lot of interest both locally and internationally. The candidates represent a wide range of political views, and the election process is being closely monitored to ensure transparency and fairness. The stakes are high, and the outcome could have far-reaching implications for the country's governance, economic policies, and international relations.",
          }
        );

        setFormattedData(response.data);
      } catch (error) {
        console.error("Error formatting data:", error);
      }
    };

    fetchData();
  }, []);

  if (!formattedData) return <div className="p-4 text-center">Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {formattedData.title}
          </h2>
          <p className="text-gray-600 mb-4">{formattedData.date}</p>
          <p className="text-gray-700 mb-4">
            {formattedData.description.length > 100
              ? formattedData.description.substring(0, 100) + "..."
              : formattedData.description}
            {formattedData.description.length > 100 && (
              <Link
                to="/election-news"
                className="text-customGreen-dark font-bold hover:underline ml-2"
              >
                Read More
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElectionDetails;
