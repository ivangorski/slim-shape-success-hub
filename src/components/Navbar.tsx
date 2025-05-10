
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl md:text-2xl gradient-text">TransformU</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
            Home
          </Link>
          <a href="#programs" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
            Programs
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
            Success Stories
          </a>
          <a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
            About Us
          </a>
          <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
            Start Your Journey
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full shadow-lg py-4 px-4 z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-teal-600 transition-colors font-medium px-4 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#programs" 
              className="text-gray-600 hover:text-teal-600 transition-colors font-medium px-4 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-600 hover:text-teal-600 transition-colors font-medium px-4 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Success Stories
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-teal-600 transition-colors font-medium px-4 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <Button size="sm" className="bg-teal-600 hover:bg-teal-700 w-full">
              Start Your Journey
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
