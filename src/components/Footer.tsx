
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">TransformU</h3>
            <p className="text-gray-600 mb-4">
              We're dedicated to helping you achieve sustainable weight loss through science-backed methods and personalized support.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Essential Plan</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Premium Plan</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Ultimate Plan</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Corporate Wellness</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Nutrition Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Exercise Library</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:support@transformu.com" className="text-gray-600 hover:text-teal-600 transition-colors">support@transformu.com</a></li>
              <li><a href="tel:+18005551234" className="text-gray-600 hover:text-teal-600 transition-colors">(800) 555-1234</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} TransformU. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-teal-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 text-sm hover:text-teal-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
