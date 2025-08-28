import React, { useState } from 'react';
import logo from './logo-white.png'; // Make sure this is correct path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsJoinUsOpen(false);
  };

  const toggleJoinUs = () => {
    setIsJoinUsOpen(!isJoinUsOpen);
  };
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-black text-white shadow-md relative z-50 h-20">
      {/* Logo on Left */}
      <div className="flex items-center">
        <img src={logo || "/placeholder.svg"} alt="TEDxIIMT Logo" className="h-16" />
      </div>

      {/* Hamburger Menu Button (visible on small screens) */}
      <button 
        className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Desktop Navigation Links (hidden on small screens) */}
      <nav className="hidden md:flex gap-6 text-sm md:text-base font-medium items-center">
        <a href="/" className="hover:text-red-500 transition">Home</a>
        <a href="/mystery" className="hover:text-red-500 transition">Mystery</a>
        <a href="/sponsors" className="hover:text-red-500 transition">Sponsors</a>
        <div className="relative">
          <button
            onClick={toggleJoinUs}
            className="hover:text-red-500 transition flex items-center"
          >
            Join Us
            <svg className={`ml-1 w-4 h-4 transition-transform ${isJoinUsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isJoinUsOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-800 rounded-lg shadow-lg">
              <a href="/join-us/speaker" className="block px-4 py-3 hover:bg-red-500/10 hover:text-red-500 transition">Speaker</a>
              <a href="/join-us/sponsor" className="block px-4 py-3 hover:bg-red-500/10 hover:text-red-500 transition">Sponsor</a>
              <a href="/join-us/attendee" className="block px-4 py-3 hover:bg-red-500/10 hover:text-red-500 transition">Attendee</a>
            </div>
          )}
        </div>
        <a href="#contact" className="hover:text-red-500 transition">Contact</a>
      </nav>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-t border-gray-800 shadow-lg md:hidden">
          <div className="flex flex-col p-4">
            <a 
              href="/" 
              className="py-3 hover:text-red-500 transition border-b border-gray-800"
              onClick={closeMenu}
            >
              Home
            </a>
            <a 
              href="/mystery" 
              className="py-3 hover:text-red-500 transition border-b border-gray-800"
              onClick={closeMenu}
            >
              Mystery
            </a>
            <a 
              href="/sponsors" 
              className="py-3 hover:text-red-500 transition border-b border-gray-800"
              onClick={closeMenu}
            >
              Sponsors
            </a>
            <div className="border-b border-gray-800">
              <button
                onClick={toggleJoinUs}
                className="w-full text-left py-3 hover:text-red-500 transition flex items-center justify-between"
              >
                Join Us
                <svg className={`w-4 h-4 transition-transform ${isJoinUsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isJoinUsOpen && (
                <div className="pl-4 pb-2">
                  <a href="/join-us/speaker" className="block py-2 text-sm hover:text-red-500 transition" onClick={closeMenu}>Speaker</a>
                  <a href="/join-us/sponsor" className="block py-2 text-sm hover:text-red-500 transition" onClick={closeMenu}>Sponsor</a>
                  <a href="/join-us/attendee" className="block py-2 text-sm hover:text-red-500 transition" onClick={closeMenu}>Attendee</a>
                </div>
              )}
            </div>
            <a 
              href="#contact" 
              className="py-3 hover:text-red-500 transition"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;