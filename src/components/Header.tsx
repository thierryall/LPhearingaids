import React, { useState, useEffect } from 'react';
import { Ear } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Ear className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Claritone
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">Benefits</a>
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
          <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
        </nav>
        
        <button className={`
          py-2 px-6 rounded-full font-medium
          ${isScrolled 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-white text-blue-600 hover:bg-blue-50'} 
          transition-all shadow-sm hover:shadow
        `}>
          Order Now
        </button>
      </div>
    </header>
  );
};

export default Header;