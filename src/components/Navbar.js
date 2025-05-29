'use client';

import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar px-4 py-2 flex items-center justify-center">
      <div className="hidden md:flex space-x-3">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="nav-link animate__animated animate__pulse animate__infinite cursor-pointer"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs">Home</span>
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="nav-link animate__animated animate__pulse animate__infinite cursor-pointer"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span className="text-xs">Services</span>
        </Link>
        <Link
          to="team"
          smooth={true}
          duration={500}
          className="nav-link animate__animated animate__pulse animate__infinite cursor-pointer"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="text-xs">Team</span>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="nav-link animate__animated animate__pulse animate__infinite cursor-pointer"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9-6 9 6v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
          </svg>
          <span className="text-xs">Contact</span>
        </Link>
      </div>
      <button id="menu-toggle" className="md:hidden text-gray-600 focus:outline-none" onClick={toggleMobileMenu}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div id="mobile-menu" className={`md:hidden bg-[#f9fafb] fixed bottom-16 left-0 w-full shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="block px-4 py-2 text-gray-600 hover:bg-gray-200 flex items-center cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="block px-4 py-2 text-gray-600 hover:bg-gray-200 flex items-center cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Services
        </Link>
        <Link
          to="team"
          smooth={true}
          duration={500}
          className="block px-4 py-2 text-gray-600 hover:bg-gray-200 flex items-center cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Team
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="block px-4 py-2 text-gray-600 hover:bg-gray-200 flex items-center cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9-6 9 6v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
          </svg>
          Contact
        </Link>
      </div>
    </nav>
  );
}