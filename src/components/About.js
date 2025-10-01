import React from 'react';
const About = ()=> (
  <section id="about" className="section fade-up">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="card">
        <h2 className="text-2xl font-bold mb-3 text-white">Our Story</h2>
        <p className="text-gray-300 leading-relaxed">Vytrixtech started in Bengaluru with a simple idea: technology should not be restricted to metros. We saw shopkeepers, tutors and small businesses in Tier 2 & 3 cities struggle with basic tools. We wanted to bring them elegant, affordable tech that feels like it was made for them — not for giants. Our moto: <strong>Tech for Everyone, Everywhere.</strong></p>
        <p className="text-gray-300 mt-3">Founded by Akash, a developer who grew up seeing local businesses rely on paper and memory, Trident.tech builds products that are practical, reliable and respectful of users' time.</p>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80" alt="team" className="rounded-xl w-full object-cover"/>
      </div>
    </div>
  </section>
);
export default About;