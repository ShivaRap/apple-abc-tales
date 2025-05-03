
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-12 flex items-center justify-between bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <Link to="/" className="flex items-center space-x-2">
        <BookOpen className="h-8 w-8 text-blue-500" />
        <span className="text-xl font-bold text-gray-900">AppleABC</span>
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 text-gray-600" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-gray-600 hover:text-blue-500">
          Home
        </Link>
        <Link to="/customize" className="text-gray-600 hover:text-blue-500">
          Create Book
        </Link>
        <Link to="/preview" className="text-gray-600 hover:text-blue-500">
          Preview
        </Link>
        <Button className="bg-pastel-blue hover:bg-blue-400 text-blue-900">
          Get Started
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 left-0 bg-white shadow-md p-4 md:hidden animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-500 py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/customize"
              className="text-gray-600 hover:text-blue-500 py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Create Book
            </Link>
            <Link
              to="/preview"
              className="text-gray-600 hover:text-blue-500 py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Preview
            </Link>
            <Button
              className="bg-pastel-blue hover:bg-blue-400 text-blue-900 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
