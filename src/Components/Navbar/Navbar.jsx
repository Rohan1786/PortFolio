import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Rohan Here</Link>
        </div>

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white hover:text-yellow-400 text-lg transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/About"
            className="text-white hover:text-yellow-400 text-lg transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/Contact"
            className="text-white hover:text-yellow-400 text-lg transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className={`text-white focus:outline-none transform transition-transform duration-300 ${
              isOpen ? 'rotate-90' : ''
            }`}
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with slide animation */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden mt-4 transition-all duration-500 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <Link
          to="/"
          className="block text-white hover:bg-indigo-700 py-2 text-lg transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/About"
          className="block text-white hover:bg-indigo-700 py-2 text-lg transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/Contact"
          className="block text-white hover:bg-indigo-700 py-2 text-lg transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
