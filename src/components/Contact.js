import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [s, setS] = useState({ name: '', email: '', msg: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);

    try {
      const formData = new FormData();
      formData.append('name', s.name);
      formData.append('email', s.email);
      formData.append('message', s.msg);

      const response = await fetch('https://formspree.io/f/xanpegew', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitted(true);
        setS({ name: '', email: '', msg: '' });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 fade-up">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* Info Card */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-2xl shadow-2xl flex flex-col gap-6 text-white">
          <h4 className="text-3xl font-bold text-cyan-400">Let's Talk</h4>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-cyan-400" />
            <a href="mailto:vytrixtech@gmail.com" className="hover:underline">
              vytrixtech@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-cyan-400" />
            <a href="tel:+919112146583" className="hover:underline">
              +91 9112146583
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-cyan-400" />
            <span>Bengaluru, India — Helping small businesses thrive</span>
          </div>
          <p className="text-gray-400 mt-4">
            We are always open to discuss your ideas, feedback, or collaboration opportunities.
          </p>
        </div>

        {/* Contact Form */}
        <form
          className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-2xl shadow-2xl flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <h4 className="text-2xl font-semibold text-cyan-400 mb-4">Send a Message</h4>

          {submitted && (
            <p className="text-green-400 font-semibold mb-2">
              Your message has been sent! We'll get back to you soon.
            </p>
          )}
          {error && (
            <p className="text-red-400 font-semibold mb-2">
              Something went wrong. Please try again.
            </p>
          )}

          <input
            required
            name="name"
            value={s.name}
            onChange={(e) => setS({ ...s, name: e.target.value })}
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <input
            required
            type="email"
            name="email"
            value={s.email}
            onChange={(e) => setS({ ...s, email: e.target.value })}
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <textarea
            required
            name="message"
            value={s.msg}
            onChange={(e) => setS({ ...s, msg: e.target.value })}
            placeholder="Your Message"
            className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none h-32"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-violet-600 text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
