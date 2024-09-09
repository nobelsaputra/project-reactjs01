// src/components/Navbar.jsx

import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-medium">Bali Sunny View</h1>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">
            Home
          </a>
          <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">
            About
          </a>
          <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">
            Services
          </a>
          <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 text-white hover:bg-blue-700">
            Home
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-blue-700">
            About
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-blue-700">
            Services
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-blue-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
