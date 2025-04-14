
import React, { useState } from 'react';
import { Menu, X, Train, Bell, User, Globe, PhoneCall } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top bar with contact and language */}
      <div className="bg-irctc-blue py-1">
        <div className="container flex justify-between text-white text-xs">
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center hover:text-irctc-yellow">
              <PhoneCall className="h-3 w-3 mr-1" />
              <span>139 (Customer Support)</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center hover:text-irctc-yellow">
              <Globe className="h-3 w-3 mr-1" />
              <span>English</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main navbar */}
      <div className="container py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Train className="h-8 w-8 text-irctc-blue" />
            <span className="text-xl font-bold text-irctc-blue">IRCTC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 font-medium hover:text-irctc-blue">Home</Link>
            <a href="#" className="text-gray-700 font-medium hover:text-irctc-blue">Trains</a>
            <a href="#" className="text-gray-700 font-medium hover:text-irctc-blue">Holidays</a>
            <a href="#" className="text-gray-700 font-medium hover:text-irctc-blue">Hotels</a>
            <a href="#" className="text-gray-700 font-medium hover:text-irctc-blue">About</a>
            <a href="#" className="text-gray-700 font-medium hover:text-irctc-blue">Contact</a>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-irctc-blue">
              <Bell className="h-5 w-5" />
            </Button>
            <Link to="/login">
              <Button variant="outline" className="flex items-center space-x-2 border-irctc-blue text-irctc-blue hover:bg-irctc-blue hover:text-white">
                <User className="h-4 w-4" />
                <span>Login</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4">
          <div className="container flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 font-medium hover:text-irctc-blue px-4 py-2">Home</Link>
            <a href="#" className="text-gray-700 font-medium hover:text-irctc-blue px-4 py-2">Trains</a>
            <a href="#" className="text-gray-700 font-medium hover:text-irctc-blue px-4 py-2">Holidays</a>
            <a href="#" className="text-gray-700 font-medium hover:text-irctc-blue px-4 py-2">Hotels</a>
            <a href="#" className="text-gray-700 font-medium hover:text-irctc-blue px-4 py-2">About</a>
            <a href="#" className="text-gray-700 font-medium hover:text-irctc-blue px-4 py-2">Contact</a>
            <div className="flex items-center space-x-4 px-4 pt-2">
              <Link to="/login">
                <Button variant="outline" className="flex items-center space-x-2 border-irctc-blue text-irctc-blue">
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
