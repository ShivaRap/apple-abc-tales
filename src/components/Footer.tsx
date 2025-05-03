
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-gray-900">AppleABC</span>
            </Link>
            <p className="text-gray-600">
              Creating magical personalized storybooks that make children the stars of their own adventures.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">ABC Books</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">Adventure Comics</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">Birthday Stories</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">Gift Cards</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">Shipping</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">Returns</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 mt-8 text-center">
          <p className="text-gray-600">
            Made with <Heart size={16} className="inline text-red-500" /> by AppleABC Tales
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
