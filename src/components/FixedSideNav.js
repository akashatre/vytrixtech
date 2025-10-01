import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const links = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 100;
      links.forEach(link => {
        const section = document.getElementById(link.id);
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActive(link.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand / Logo */}
        <div className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">
          VytrixTech
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer ${
                active === link.id ? 'border-b-2 border-cyan-400' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMobile}>
          {mobileOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-900 text-white px-6 py-4 flex flex-col space-y-4 animate-slide-down">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`hover:text-cyan-400 transition-colors duration-300 cursor-pointer ${
                active === link.id ? 'text-cyan-400 font-semibold' : ''
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
