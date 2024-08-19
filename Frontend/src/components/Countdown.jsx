import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Countdown = ({
  venue = "Nigeria Presidential and Governorship Elections",
}) => {
  // Set the target date to November 11th, 2024
  const getTargetDate = () => {
    const targetDate = new Date("2024-11-11T00:00:00"); // November 11th, 2024 at midnight
    return targetDate.toISOString();
  };

  const calculateTimeLeft = (targetDate) => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [targetDate] = useState(getTargetDate());
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg flex flex-col items-center">
      <p className="flex items-center text-lg mb-4">
        <FaMapMarkerAlt className="mr-2 text-red-500" /> {venue}
      </p>
      <div className="flex gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800">
            {timeLeft.days}
          </div>
          <div className="text-sm text-gray-600">Days</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800">
            {timeLeft.hours}
          </div>
          <div className="text-sm text-gray-600">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800">
            {timeLeft.minutes}
          </div>
          <div className="text-sm text-gray-600">Mins</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800">
            {timeLeft.seconds}
          </div>
          <div className="text-sm text-gray-600">Secs</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
