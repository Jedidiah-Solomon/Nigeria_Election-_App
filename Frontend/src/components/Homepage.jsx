import React from "react";

const Homepage = () => {
  return (
    <main className="container mx-auto p-4">
      <h2 className="text-md laptop:text-4xl text-center font-bold mb-4">
        Welcome to Nigeria Election App
      </h2>
      <p className="mb-4 text-center">
        Participate in upcoming elections and make your voice heard!
      </p>
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
