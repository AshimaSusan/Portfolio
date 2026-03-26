import React from 'react';
import { motion } from 'framer-motion';

const defaultFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  const badges = [
    "Financial Analysis",
    "MIS Reporting",
    "GST Compliance",
    "FP&A",
    "Data Analytics"
  ];

  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={defaultFadeIn}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 relative inline-block">
            About Me
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary-light dark:bg-primary-dark rounded-full"></div>
          </h2>
          
          <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent-light dark:bg-accent-dark rounded-br-full opacity-50 z-0"></div>
            
            <p className="text-xl md:text-2xl leading-relaxed mb-10 relative z-10 font-medium">
              MBA Finance & Business Analytics student with robust experience in accounting, 
              audit, taxation, and financial reporting. I bring a meticulous approach to 
              data and a strategic mindset to business growth.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 relative z-10">
              {badges.map((badge, idx) => (
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  key={idx}
                  className="px-5 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md text-sm md:text-base font-semibold shadow-sm"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
