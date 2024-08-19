import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/img/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-customGreen-dark text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Nigeria Election App Logo"
              className="h-10 mr-4"
            />
          </Link>
          <h1 className="mobile-header-title tablet-header-title laptop-header-title desktop-header-title">
            Nigeria Election App
          </h1>
        </div>
        <nav className="hidden laptop:flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/elections" className="hover:underline">
            Elections
          </Link>
          <Link to="/candidates" className="hover:underline">
            Candidates
          </Link>
          <Link to="/parties" className="hover:underline">
            Parties
          </Link>
          <Link to="/admin-login" className="hover:underline">
            Admin
          </Link>
          <Link to="/voter-register" className="hover:underline">
            Voter
          </Link>
        </nav>
        <button
          className="laptop:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <nav className="laptop:hidden bg-blue-600 text-white p-4">
          <Link to="/" className="block py-2 hover:underline">
            Home
          </Link>
          <Link to="/elections" className="block py-2 hover:underline">
            Elections
          </Link>
          <Link to="/candidates" className="block py-2 hover:underline">
            Candidates
          </Link>
          <Link to="/parties" className="block py-2 hover:underline">
            Parties
          </Link>
          <Link to="/admin-login" className="block py-2 hover:underline">
            Admin
          </Link>
          <Link to="/voter-register" className="block py-2 hover:underline">
            Voter
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
