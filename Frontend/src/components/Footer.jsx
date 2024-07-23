import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto">
        <p className="text-center">
          &copy; {currentYear} Nigeria Election App by Jedidiah.
          <br /> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
