import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Mentors', href: '#mentors' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-teal-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-teal-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              Build3X
            </span>
            <span className="text-sm bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full font-semibold">
              S1
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <a
          href='https://chat.whatsapp.com/BjZ3QgyzTX68qSXi4wmmOi'
          target="_blank"
          rel="noopener noreferrer" 
          className="hidden md:block bg-gradient-to-r from-teal-400 to-orange-400 text-black px-6 py-2 rounded-full font-semibold hover:from-teal-300 hover:to-orange-300 transition-all duration-200 transform hover:scale-105 shadow-lg">
            Apply Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-teal-400/30">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
              href='https://chat.whatsapp.com/BjZ3QgyzTX68qSXi4wmmOi'
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-teal-400 to-orange-400 text-black px-6 py-2 rounded-full font-semibold mt-4 w-full">
                Apply Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;