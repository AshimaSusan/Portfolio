import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      {/* Background overlay to avoid nested backdrop blur bugs */}
      <div 
        className={`absolute inset-0 transition-all duration-300 ${
          scrolled ? 'glass opacity-100' : 'bg-transparent opacity-0'
        }`}
        style={{ zIndex: -1 }}
      />
      
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative z-10">
        <a href="#" className={`text-xl font-bold tracking-tighter ${scrolled ? 'text-primary-light dark:text-primary-dark' : 'text-white'}`}>
          ASG.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-bold transition-colors ${
                scrolled 
                  ? 'text-primary-light/70 hover:text-primary-light dark:text-primary-dark/70 dark:hover:text-primary-dark' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              scrolled 
                ? 'hover:bg-black/5 dark:hover:bg-white/10 text-primary-light dark:text-primary-dark' 
                : 'hover:bg-white/20 text-white'
            }`}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              scrolled 
                ? 'hover:bg-black/5 dark:hover:bg-white/10 text-primary-light dark:text-primary-dark' 
                : 'hover:bg-white/20 text-white'
            }`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 ${scrolled ? 'text-primary-light dark:text-primary-dark' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass shadow-xl border-t border-black/5 dark:border-white/5 py-6 px-6 md:hidden flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
