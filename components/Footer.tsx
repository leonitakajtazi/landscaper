
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green text-brand-neutral">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white tracking-wider">LushScapes</h3>
            <p className="text-sm">Creating Beauty, Naturally.</p>
          </div>
          <nav className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
        <div className="mt-8 border-t border-brand-green-light pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} LushScapes. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
