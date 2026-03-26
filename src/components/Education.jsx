import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationList = [
  {
    degree: "MBA – Finance & Business Analytics",
    year: "2026",
    institution: "Pursuing",
    desc: "Focusing on advanced financial modeling, predictive analytics, and strategic business management."
  },
  {
    degree: "B.Com – Finance & Taxation",
    year: "2023",
    institution: "Graduated",
    desc: "Built a strong foundation in accounting principles, taxation laws, and corporate finance."
  },
  {
    degree: "Integrated Diploma with SAP",
    year: "2023",
    institution: "Accountant Service Society, Ernakulam",
    desc: "Completed an Integrated Diploma with SAP with a score of 92%."
  }
];

const Education = () => {
  return (
    <section className="py-24 bg-black/[0.02] dark:bg-white/[0.02]" id="education">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Education</h2>
          <div className="h-px bg-black/20 dark:bg-white/20 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap size={100} />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold leading-tight max-w-[80%]">{edu.degree}</h3>
                  <span className="text-sm font-bold bg-accent-light dark:bg-accent-dark px-4 py-1.5 rounded-full">
                    {edu.year}
                  </span>
                </div>
                
                <p className="text-primary-light/60 dark:text-primary-dark/60 font-semibold mb-4 uppercase tracking-wider text-sm">
                  {edu.institution}
                </p>
                
                <p className="text-secondary-light dark:text-secondary-dark relative">
                  {edu.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
