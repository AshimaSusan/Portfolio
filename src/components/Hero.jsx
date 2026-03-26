import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="home">
      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden touch-none select-none z-0">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[15vw] font-black leading-none whitespace-nowrap text-primary-light dark:text-primary-dark"
          style={{ letterSpacing: '-0.05em' }}
        >
          PORTFOLIO '25
        </motion.h1>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent-light dark:bg-accent-dark text-sm font-semibold mb-6 tracking-wider uppercase">
            Finance & Business Analytics Professional
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-[#a58d7b] dark:text-[#c4a993]">Ashima.</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-light dark:text-secondary-dark mb-10 max-w-xl leading-relaxed">
            I specialize in financial analysis, reporting, and data-driven decision making. I transform financial data into actionable insights using modern tools and AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary-light dark:bg-primary-dark text-white dark:text-black rounded-full font-semibold hover:scale-105 transition-transform active:scale-95 shadow-lg"
            >
              View Work
            </a>
            <a 
              href="#about" 
              className="px-8 py-4 bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-full font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-center"
            >
              More About Me
            </a>
          </div>
        </motion.div>

        {/* Image/Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-1 lg:order-2 flex justify-center relative"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-accent-light dark:bg-accent-dark rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <img 
              src={`${import.meta.env.BASE_URL}avatar.png`} 
              alt="Ashima Susan George" 
              className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
