import React from 'react';
import { FaLaptop, FaChartBar, FaMobileAlt, FaCloud, FaRobot } from 'react-icons/fa';

const list = [
  { icon: <FaLaptop />, title: 'Personal Websites', desc: 'Custom websites that show your business to local customers.' },
  { icon: <FaChartBar />, title: 'Sales Analysis', desc: 'Easy-to-understand dashboards showing what sells and when.' },
  { icon: <FaMobileAlt />, title: 'Mobile Apps', desc: 'Lightweight apps for Android & iOS to take orders and manage sales.' },
  { icon: <FaCloud />, title: 'Cloud & Backup', desc: 'Safe backups and reliable hosting that never loses data.' },
  { icon: <FaRobot />, title: 'AI Automation', desc: 'Automate reminders, stock alerts and simple chat assistants.' },
];

const Services = () => (
  <section id="services" className="section py-16 bg-gray-900 fade-up">
    <div className="max-w-6xl mx-auto px-6 text-center">
      {/* Section Heading */}
      <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12">Services — Everything for Small Businesses</h3>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {list.map((s, i) => (
          <div
            key={i}
            className="bg-gray-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-cyan-400 text-5xl mb-4">{s.icon}</div>
            <h4 className="font-semibold text-white text-xl mb-2">{s.title}</h4>
            <p className="text-gray-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
