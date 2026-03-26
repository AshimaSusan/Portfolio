import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-primary-light dark:bg-black text-white/50 border-t border-white/10 text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm font-medium">
          &copy; {new Date().getFullYear()} Ashima Susan George. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
