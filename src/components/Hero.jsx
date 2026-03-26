import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden pt-20" id="home">
      {/* Background Avatar Image with Faded Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-background-light/50 dark:bg-background-dark/50">
        <img 
          src={`${import.meta.env.BASE_URL}avatar.png`} 
          alt="Background Avatar" 
          className="w-full h-full object-cover object-center opacity-90 dark:opacity-70"
        />
        {/* Protective gradients for text legibility. Bottom on mobile, Left on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-light via-background-light/80 to-transparent md:bg-gradient-to-r md:from-background-light md:via-background-light/70 md:to-transparent dark:from-background-dark dark:via-background-dark/80 md:dark:from-background-dark md:dark:via-background-dark/70"></div>
      </div>

      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start md:px-12 pointer-events-none overflow-hidden touch-none select-none z-0 opacity-40">
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

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-end md:justify-center items-center md:items-start pb-24 md:pb-0 w-full h-full min-h-[calc(100vh-80px)]">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center md:items-start md:text-left max-w-2xl mt-auto md:mt-12"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-accent-light/90 dark:bg-accent-dark/90 backdrop-blur-md text-xs sm:text-sm font-bold mb-6 tracking-widest uppercase border border-black/10 dark:border-white/10 shadow-sm text-primary-light">
            Finance & Business Analytics Professional
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 drop-shadow-xl text-primary-light dark:text-primary-dark">
            Hi, I'm <span className="text-secondary-light dark:text-secondary-dark relative inline-block">Ashima.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-light/80 dark:text-primary-dark/80 mb-10 leading-relaxed font-semibold drop-shadow-md max-w-xl">
            I specialize in financial analysis, reporting, and data-driven decision making. I transform financial data into actionable insights using modern tools and AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary-light dark:bg-primary-dark text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg"
            >
              View Work
            </a>
            <a 
              href="#about" 
              className="px-8 py-4 bg-white/60 dark:bg-black/60 backdrop-blur-lg border border-black/10 dark:border-white/10 rounded-full font-bold hover:bg-white/80 dark:hover:bg-black/80 transition-colors text-center text-primary-light dark:text-primary-dark shadow-md"
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
