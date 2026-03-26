import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Audit and Accounts Intern",
    company: "George & Sebastian Chartered Accountants",
    location: "Vyttila, Ernakulam",
    period: "Sept 2025 - Feb 2026",
    description: [
      "Handled ledger scrutiny and GST mismatch checks (GSTR 1/2A/2B).",
      "Managed TDS and Clause 44 workings, Tally entries, and corrections.",
      "Prepared financial statements and reconciliations.",
      "Communicated on client queries and drafted key audit documents."
    ]
  },
  {
    role: "Finance Intern (Accounts & Audit)",
    company: "IVBM OPC Pvt Ltd",
    location: "Thykoodam, Ernakulam",
    period: "Oct 2024 - Dec 2024",
    description: [
      "Recorded and verified financial transactions (receipts, payments, sales, purchases, bank entries).",
      "Prepared MIS reports and reconciliations.",
      "Utilized VB Accounts software and Zoho Books."
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-32 relative bg-background-light dark:bg-background-dark" id="experience">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column - Sticky Introductory Content */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-secondary-light dark:text-secondary-dark uppercase tracking-widest text-sm font-bold mb-4 block">
                  Experience
                </span>
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  My Career <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light dark:from-white dark:to-secondary-dark">
                    Journey.
                  </span>
                </h2>
                <p className="text-secondary-light dark:text-secondary-dark leading-relaxed">
                  A timeline of my professional roles, highlighting my growth in financial analytics, auditing, and corporate accounting.
                </p>
                
                {/* Decorative element */}
                <div className="w-full h-px bg-black/10 dark:bg-white/10 mt-10 relative hidden lg:block">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-0.5 bg-black dark:bg-white"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Timeline Cards */}
          <div className="lg:col-span-8 lg:pl-10 relative">
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="group relative"
                >
                  {/* Decorative Side Line for Desktop (The Timeline Path) */}
                  <div className="hidden lg:block absolute -left-10 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10 group-hover:bg-black/30 dark:group-hover:bg-white/30 transition-colors">
                    <div className="absolute -left-1.5 top-8 w-3 h-3 rounded-full border-2 border-background-light dark:border-background-dark bg-black dark:bg-white ring-4 ring-black/5 dark:ring-white/5 group-hover:scale-150 transition-transform duration-300"></div>
                  </div>

                  {/* Card Main Body */}
                  <div className="relative glass p-8 md:p-10 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-black/[0.03] dark:border-white/[0.03] hover:border-black/10 dark:hover:border-white/10 overflow-hidden">
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/[0.03] to-transparent dark:from-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="relative z-10">
                      {/* Top Row: Role and Date */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-light group-hover:to-secondary-light dark:group-hover:from-white dark:group-hover:to-secondary-dark transition-all duration-300">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-secondary-light dark:text-secondary-dark uppercase tracking-wider">
                            <span>{exp.company}</span>
                            <span className="w-1 h-1 rounded-full bg-current opacity-50"></span>
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <div className="shrink-0">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-sm border border-black/5 dark:border-white/5 text-sm font-bold shadow-sm whitespace-nowrap">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <div className="w-full h-px bg-black/10 dark:bg-white/10 mb-6"></div>

                      {/* Description List */}
                      <ul className="space-y-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex gap-4 text-base md:text-lg opacity-80 leading-relaxed group-hover:opacity-100 transition-opacity">
                            <div className="mt-1.5 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
