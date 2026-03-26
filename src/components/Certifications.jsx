import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const certifications = [
  "Financial Modeling (KPMG)",
  "Financial Services Certification",
  "GST Certification",
  "Tally Certification",
  "Advanced Excel"
];

const Certifications = () => {
  return (
    <section className="py-24" id="certifications">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between pl-4 gap-8 mb-16 relative before:absolute before:inset-0 before:w-1.5 before:bg-primary-light dark:before:bg-primary-dark before:rounded-full">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">Licenses &</h2>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-light dark:text-secondary-dark">Certifications</h2>
          </div>
          
          <div className="hidden md:block opacity-20 relative">
             <Award size={80} className="text-primary-light dark:text-primary-dark outline-none" strokeWidth={1} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex items-center gap-4 p-5 glass rounded-2xl hover:shadow-lg transition-all"
            >
              <div className="text-green-600 dark:text-green-400 shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <span className="font-semibold text-lg">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
