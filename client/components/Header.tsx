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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isScrolled ? 'bg-primary-500 text-white' : 'bg-white text-primary-500'}`}>
              <Globe size={24} />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-primary-900' : 'text-white'}`}>
              رؤية <span className={isScrolled ? 'text-accent-600' : 'text-accent-400'}>لحلول الأعمال</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                  isScrolled ? 'text-gray-700' : 'text-gray-100'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                isScrolled 
                  ? 'bg-primary-500 text-white hover:bg-primary-600' 
                  : 'bg-white text-primary-900 hover:bg-gray-100'
              }`}
            >
              ابدأ الآن
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