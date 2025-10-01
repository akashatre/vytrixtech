import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      
      {/* Company Info */}
      <div className="text-center md:text-left space-y-2">
        <h4 className="text-2xl font-bold text-cyan-400">VytrixTech</h4>
        <p className="text-gray-400">Bengaluru • Tech for Everyone, Everywhere</p>
        <p className="text-gray-500 text-sm">© 2025 VytrixTech. All rights reserved.</p>
      </div>

      {/* Social Links */}
      <div className="flex gap-6">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
          <FaTwitter size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
          <FaGithub size={24} />
        </a>
      </div>
    </div>

    {/* Optional Bottom Border */}
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
      Made with 💙 by VytrixTech Team
    </div>
  </footer>
);

export default Footer;
