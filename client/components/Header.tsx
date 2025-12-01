import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo with animation */}
          <a href="#" className="group flex items-center gap-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 ${
              isScrolled ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/50' : 'bg-white text-primary-500'
            }`}>
              <Globe size={24} className="group-hover:animate-pulse" />
            </div>
            <span className={`text-2xl font-bold tracking-tight transition-all duration-300 ${
              isScrolled ? 'text-primary-900' : 'text-white'
            }`}>
              رؤية <span className={`transition-colors ${isScrolled ? 'text-accent-600' : 'text-accent-400'}`}>لحلول الأعمال</span>
            </span>
          </a>

          {/* Desktop Navigation with hover effects */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  isScrolled ? 'text-gray-700 hover:text-accent-600' : 'text-gray-100 hover:text-accent-400'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-accent-600' : 'bg-accent-400'
                }`}></span>
              </a>
            ))}
            <a 
              href="#contact"
              className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 overflow-hidden group ${
                isScrolled 
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/50' 
                  : 'bg-white text-primary-900 hover:shadow-lg'
              }`}
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative">ابدأ الآن</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg p-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-gray-700 font-medium py-2 border-b border-gray-50 hover:text-primary-500"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-primary-500 text-white text-center py-3 rounded-lg font-bold mt-2"
            onClick={() => setIsOpen(false)}
          >
            تواصل معنا
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;