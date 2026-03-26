import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, PenTool, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: "Finance",
    icon: <PieChart size={24} />,
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    skills: ["Financial Analysis", "MIS Reporting", "Variance Analysis", "Budgeting & Forecasting"]
  },
  {
    title: "Tools",
    icon: <PenTool size={24} />,
    color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    skills: ["SAP (FICO, MM, SD)", "Tally", "Zoho Books", "Advanced Excel", "Power BI", "Tableau"]
  },
  {
    title: "Advanced",
    icon: <Cpu size={24} />,
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    skills: ["Python (Finance Analysis)", "AI Tools (ChatGPT, Claude, n8n)"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section className="py-24" id="skills">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Competencies</h2>
          <p className="text-secondary-light dark:text-secondary-dark max-w-2xl mx-auto">
            A comprehensive toolkit combining traditional financial expertise with modern analytical capabilities.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-2xl ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-4 py-2 rounded-xl bg-black/5 dark:bg-white/5 text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
