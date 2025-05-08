
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Cartes', path: '/maps' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Top Listes', path: '/top-lists' },
    { name: 'À Propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <NavLink to="/" className="flex items-center" onClick={closeMenu}>
              <span className="text-amsterdam-blue font-poppins font-bold text-xl">
                Amsterdam<span className="text-amsterdam-orange">Unlocked</span>
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-amsterdam-orange font-semibold' 
                      : 'text-gray-700 hover:text-amsterdam-blue'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button className="bg-amsterdam-orange hover:bg-amber-600 text-white">
              Explorer
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-amsterdam-blue focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive 
                      ? 'bg-amsterdam-blue/10 text-amsterdam-blue font-semibold' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
                onClick={closeMenu}
              >
                {link.name}
              </NavLink>
            ))}
            <Button className="bg-amsterdam-orange hover:bg-amber-600 text-white w-full mt-2">
              Explorer
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
