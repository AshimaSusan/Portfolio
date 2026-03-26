import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, PhoneCall } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-32 bg-primary-light dark:bg-black text-white" id="contact">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            Let's work <span className="text-white/50">together.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 mb-16 font-light">
            I'm currently available for opportunities in finance and analytics. Let's start a conversation.
          </p>

          <div className="flex justify-center items-center gap-6 md:gap-8">
            <motion.a 
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:ashimasg23@gmail.com" 
              className="p-5 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
              title="Email"
            >
              <Mail size={32} />
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/ashima-susan-george/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
              title="LinkedIn"
            >
              <Linkedin size={32} />
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="tel:9037480385" 
              className="p-5 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
              title="Phone"
            >
              <PhoneCall size={32} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
