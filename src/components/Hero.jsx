import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="home">
      {/* Background Avatar Image with Faded Effect */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none overflow-hidden">
        <img 
          src={`${import.meta.env.BASE_URL}avatar.png`} 
          alt="Background Avatar" 
          className="w-full h-full object-cover object-top opacity-30 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen scale-105"
        />
        {/* Gradient overlays for smooth fading into background color */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-light via-background-light/60 to-transparent dark:from-background-dark dark:via-background-dark/80 dark:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background-light/40 to-transparent dark:from-background-dark/40 dark:to-transparent"></div>
      </div>

      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden touch-none select-none z-0 opacity-60">
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

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex justify-center items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center max-w-3xl mt-12"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent-light/80 dark:bg-accent-dark/80 backdrop-blur-sm text-sm font-semibold mb-6 tracking-wider uppercase border border-black/5 dark:border-white/5 shadow-sm">
            Finance & Business Analytics Professional
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 drop-shadow-sm">
            Hi, I'm <span className="text-[#a58d7b] dark:text-[#c4a993]">Ashima.</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-light dark:text-secondary-dark mb-10 leading-relaxed drop-shadow-sm max-w-2xl font-medium">
            I specialize in financial analysis, reporting, and data-driven decision making. I transform financial data into actionable insights using modern tools and AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary-light dark:bg-primary-dark text-white dark:text-black rounded-full font-semibold hover:scale-105 transition-transform active:scale-95 shadow-lg"
            >
              View Work
            </a>
            <a 
              href="#about" 
              className="px-8 py-4 bg-white/50 dark:bg-black/50 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full font-semibold hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-center"
            >
              More About Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
