import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "Financial Reporting Dashboard",
    desc: "Interactive dashboard for real-time financial metrics using Power BI.",
    color: "bg-[#7c9bc3] dark:bg-[#4a6b99]", // soft blue
    textColor: "text-white"
  },
  {
    id: "02",
    title: "GST Compliance & Analysis",
    desc: "Streamlined tax filing procedure ensuring 100% compliance accuracy.",
    color: "bg-[#cfba90] dark:bg-[#a68f60]", // soft gold/beige
    textColor: "text-white"
  },
  {
    id: "03",
    title: "MIS & Reconciliation System",
    desc: "Automated ledger checking reducing manual effort by 40%.",
    color: "bg-[#a6bf9e] dark:bg-[#78966f]", // soft green
    textColor: "text-white"
  },
  {
    id: "04",
    title: "FP&A Budget Model",
    desc: "Dynamic Excel forecasting model for next-quarter revenue predictions.",
    color: "bg-[#c97474] dark:bg-[#994747]", // soft red
    textColor: "text-white"
  },
  {
    id: "05",
    title: "AI in Finance Automation",
    desc: "Using n8n and Python scripts to automate routine invoice processing.",
    color: "bg-[#8b9ecc] dark:bg-[#596b99]", // soft purple-blue
    textColor: "text-white"
  }
];

const Projects = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="projects">
      {/* Background Text Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none z-0">
        <h2 className="text-[20vw] font-black opacity-[0.03] dark:opacity-[0.02] tracking-tighter mix-blend-overlay">
          CONTENT
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 hidden md:block">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Work</h2>
          <p className="text-secondary-light dark:text-secondary-dark hidden md:block max-w-xs text-right">
            A selection of my recent financial analyses and automation projects.
          </p>
        </div>
      </div>

      {/* Grid container matching reference image */}
      <div className="w-full px-4 md:px-0">
        <div className="flex flex-col md:flex-row h-auto md:h-[600px] w-full max-w-[1600px] mx-auto group/container gap-4 md:gap-0">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`
                relative flex-1 rounded-3xl md:rounded-none overflow-hidden transition-all duration-500 ease-in-out cursor-pointer p-6 md:p-8 flex flex-col justify-end
                ${project.color} ${project.textColor} 
                min-h-[300px] md:min-h-full
                md:hover:flex-[1.5] group
              `}
            >
              <div className="absolute top-6 left-6 opacity-0 md:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Large Number mimicking reference layout */}
              <div className="absolute top-4 right-4 md:bottom-32 md:right-auto md:top-auto md:left-1/2 md:-translate-x-1/2">
                <span className="text-6xl md:text-[12rem] font-black leading-none opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 inline-block drop-shadow-lg mix-blend-overlay">
                  {project.id.replace('0', '')}
                </span>
              </div>

              <div className="relative z-10 bg-black/20 dark:bg-black/40 backdrop-blur-md p-6 rounded-2xl md:bg-transparent md:backdrop-blur-none md:p-0 md:rounded-none md:translate-y-8 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-sm font-bold opacity-80 mb-2 block tracking-wider uppercase">Project {project.id}</span>
                <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">{project.title}</h3>
                <p className="text-sm md:text-base opacity-90 leading-snug">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
