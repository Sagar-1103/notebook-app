import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
    const [isActive, setIsActive] = useState(false);
  
    const toggleButton = () => {
      setIsActive(!isActive);
    };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add a resize event listener to close the mobile menu when the screen size becomes larger
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center relative">
        {/* Brand name centered for mobile view */}
        <Link
          to="/"
          className="text-white text-2xl font-bold text-start md:text-left"
        >
          NoteBook
        </Link>
        <div className="md:flex space-x-4 mt-4 md:mt-0 hidden">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About us
          </Link>
          <Link to="/login" className="text-white">
            Sign up
          </Link>
          <Link to="/" className="text-white">
            Profile
          </Link>
        
        </div>
        {/* Toggle button at top-right for mobile view */}
        <button
          onClick={toggleMobileMenu}
          className="absolute p-1 top-0.5 right-4 md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="bg-gray-800 mt-2">
            <Link to="/" className="block py-2 px-4 text-white">
              Home
            </Link>
            <Link to="/about" className="block py-2 px-4 text-white">
              About us
            </Link>
            <Link to="/login" className="block py-2 px-4 text-white">
              Sign up
            </Link>
            <Link to="/" className="block py-2 px-4 text-white">
              Profile
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}