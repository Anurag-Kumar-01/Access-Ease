import React,{useState} from "react";
import { Accessibility, Menu, X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Header Component
 export const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = [
    {
      name : 'Home',
      path : '/',
    },{
      name : 'Feature',
      path : '/feature',
    },{
      name : 'Pricing',
      path : '/pricing',
    },{
      name : 'About',
      path : '/about',
    },{
      name : 'Contact',
      path : '/contact',
    },{
      name : 'Login',
      path : '/Login',
    },{
      name : 'Signup',
      path : '/signup',
    }
  ]
    
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Accessibility className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">AccessEase</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => navigate(item.path)}
                className={`px-3 py-2 text-sm font-medium `}
              >
                {item.name}
              </button>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setCurrentPage('login')}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Login
            </button>
            <button 
              onClick={() => setCurrentPage('signup')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              Get Started
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'Features', 'Pricing', 'About', 'Contact', 'Login'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setCurrentPage(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => {
                setCurrentPage('signup');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 text-base font-medium mt-2"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
