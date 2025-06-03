import React, { useState, useEffect } from 'react';
import { Ear, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
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
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <div className="flex items-center">
          <Ear className="h-8 w-8 text-primary" />
          <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Claritone
          </span>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#benefits" className="text-gray-700 hover:text-primary transition-colors">Benefits</a>
          <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Features</a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Testimonials</a>
          <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle navigation"
        >
          <Menu className="h-6 w-6" />
        </button>

        <button className={`
          py-2 px-6 rounded-full font-medium
          ${isScrolled
            ? 'bg-primary text-white hover:bg-primary-dark'
            : 'bg-white text-primary hover:bg-gray-50'}
          transition-all shadow-sm hover:shadow
        `}>
          Order Now
        </button>
        {menuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 flex flex-col items-center space-y-4">
            <a href="#benefits" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Benefits</a>
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Testimonials</a>
            <a href="#faq" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>FAQ</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;