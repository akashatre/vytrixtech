import React from 'react';
import { FaHeart, FaTools, FaWallet } from 'react-icons/fa';

const Why = () => (
  <section className="section py-16 bg-gray-900 fade-up">
    <div className="max-w-6xl mx-auto px-6 text-center">
      {/* Section Heading */}
      <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">Why We Care</h3>
      <p className="text-gray-300 text-lg md:text-xl mb-12">
        We believe tech should lift people. By focusing on smaller cities, we bring solutions where they matter most — helping shop owners get clarity, reduce waste, and grow their income.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Empathy */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
          <FaHeart className="text-cyan-400 text-4xl mb-4" />
          <h4 className="font-semibold text-white text-xl mb-2">Empathy</h4>
          <p className="text-gray-300">Design that respects the user's time and knowledge.</p>
        </div>

        {/* Practicality */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
          <FaTools className="text-cyan-400 text-4xl mb-4" />
          <h4 className="font-semibold text-white text-xl mb-2">Practicality</h4>
          <p className="text-gray-300">Tools that do one thing well — no fluff.</p>
        </div>

        {/* Affordability */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
          <FaWallet className="text-cyan-400 text-4xl mb-4" />
          <h4 className="font-semibold text-white text-xl mb-2">Affordability</h4>
          <p className="text-gray-300">Pricing designed for small budgets.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Why;
