import React from 'react';
import { FaChartLine, FaLaptopCode, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Team = () => (
  <section className="section py-16 bg-gray-900">
    <div className="max-w-6xl mx-auto px-6">
      {/* Section Heading */}
      <motion.h3
        className="text-3xl font-bold mb-12 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Founders & Team
      </motion.h3>

      {/* Founder Info */}
      <motion.div
        className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h4 className="font-semibold text-cyan-400 text-3xl hover:text-cyan-300 transition-colors duration-300">
          Akash — Founder & Data Analyst
        </h4>
        <p className="text-gray-300 text-lg leading-relaxed">
          Based in Bengaluru, Akash founded <span className="font-semibold text-white">Vytrixtech</span> to empower businesses with smart technology.  
          With expertise in data analysis, he builds data-driven products that make real impact.
        </p>
        <p className="text-gray-400 italic">“Turning insights into action, one business at a time.”</p>

        {/* Skills */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          {[
            { icon: <FaChartLine className="text-cyan-400 text-2xl" />, label: 'Data Analysis' },
            { icon: <FaLaptopCode className="text-cyan-400 text-2xl" />, label: 'Web Development' },
            { icon: <FaLightbulb className="text-cyan-400 text-2xl" />, label: 'Product Design' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Team;
