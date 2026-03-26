import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden pt-20" id="home">
      {/* Background Avatar Image with Faded Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black/20">
        <img 
          src={`${import.meta.env.BASE_URL}avatar.png`} 
          alt="Background Avatar" 
          className="w-full h-full object-cover object-left md:object-center opacity-100 dark:opacity-90"
        />
        {/* Protective gradients for text legibility. Top and Bottom on mobile, Left on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 md:bg-gradient-to-r md:from-black/90 md:via-black/50 md:to-transparent"></div>
      </div>

      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start md:px-12 pointer-events-none overflow-hidden touch-none select-none z-0 opacity-20">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[15vw] font-black leading-none whitespace-nowrap text-white"
          style={{ letterSpacing: '-0.05em' }}
        >
          PORTFOLIO '25
        </motion.h1>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-start md:justify-center items-center md:items-start w-full h-full min-h-screen pt-28 md:pt-0 pb-8 md:pb-0">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center md:items-start md:text-left max-w-xl flex-1 md:flex-none w-full justify-between md:justify-start md:mt-12"
        >
          {/* Top Section (Badge & Intro) */}
          <div className="flex flex-col items-center md:items-start w-full mt-4 md:mt-0">
            <span className="inline-block py-1.5 px-3 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-6 tracking-widest uppercase border border-white/20 shadow-sm text-white">
              Finance & Business Analytics Professional
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg text-white">
              Hi, I'm <span className="text-[#e6dfd1] relative inline-block">Ashima.</span>
            </h1>
          </div>

          {/* Bottom Section (Description & Buttons) */}
          <div className="flex flex-col items-center md:items-start w-full mt-auto md:mt-6 mb-4 md:mb-0">
            <p className="text-base md:text-xl text-white/90 mb-8 leading-relaxed font-semibold drop-shadow-md max-w-lg">
              I specialize in financial analysis, reporting, and data-driven decision making. I transform financial data into actionable insights using modern tools and AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full">
              <a 
                href="#projects" 
                className="px-8 py-3.5 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg"
              >
                View Work
              </a>
              <a 
                href="#about" 
                className="px-8 py-3.5 bg-black/40 backdrop-blur-lg border border-white/20 rounded-full font-bold hover:bg-black/60 transition-colors text-center text-white shadow-md"
              >
                More About Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
