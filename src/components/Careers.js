import React, { useState, useRef, useEffect } from 'react';

const roles = [
  {
    title: 'Internship - Data Analyst',
    type: 'Internship',
    location: 'Remote / Hybrid',
    bullets: [
      'Analyze shop sales data',
      'Work with Python & SQL',
      'Build simple dashboards',
    ],
    stipend: 'Stipend: Discuss (Paid/Unpaid)',
  },
  {
    title: 'Internship - Web Developer',
    type: 'Internship',
    location: 'Remote / Hybrid',
    bullets: [
      'Develop modern web apps with React & Tailwind',
      'Collaborate with backend team',
      'Work on real startup products',
    ],
    stipend: 'Stipend: Discuss (Paid/Unpaid)',
  },
];

const Careers = () => {
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', resume: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (selected && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selected]);

  const apply = (role) => {
    setSelected(role);
    setSubmitted(false);
    setError(false);
  };

  const submit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);

    try {
      const formData = new FormData();
      formData.append('role', selected);
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('resume', form.resume);
      formData.append('message', form.message);

      const response = await fetch('https://formspree.io/f/xanpegew', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', resume: '', message: '' });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <section id="careers" className="section fade-up">
      <h3 className="text-3xl font-bold mb-4">🚀 Careers & Internships</h3>
      <p className="text-gray-300 mb-8 max-w-2xl">
        Be part of an early-stage startup where your ideas matter. We offer 
        internships for passionate learners in <strong>Data Analytics</strong> 
        and <strong>Web Development</strong>. Build real products and gain hands-on experience.
      </p>

      {/* Roles Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {roles.map((r, i) => (
          <div
            key={i}
            className="card border border-gray-700 p-6 rounded-xl shadow hover:shadow-lg hover:border-indigo-500 transition"
          >
            <h4 className="font-semibold text-xl text-white">{r.title}</h4>
            <p className="text-sm text-gray-400">{r.type} | {r.location}</p>
            <ul className="text-gray-300 list-disc list-inside mt-3 space-y-1">
              {r.bullets.map((b, bi) => (
                <li key={bi}>{b}</li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-indigo-400">{r.stipend}</span>
              <button
                onClick={() => apply(r.title)}
                className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-600 text-black rounded-full font-medium hover:scale-105 transition"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Application Form */}
      {selected && (
        <div ref={formRef} className="card max-w-2xl mx-auto p-6 border border-gray-700 rounded-xl shadow">
          <h4 className="font-semibold text-xl mb-4 text-white">Apply for {selected}</h4>

          {submitted && (
            <div className="bg-green-700/30 text-green-400 p-3 rounded mb-3">
              ✅ Your application has been sent! We'll get back to you soon.
            </div>
          )}
          {error && (
            <div className="bg-red-700/30 text-red-400 p-3 rounded mb-3">
              ❌ Something went wrong. Please try again.
            </div>
          )}

          <form onSubmit={submit} className="grid gap-4">
            <div>
              <label className="block text-gray-300 mb-1">Full Name *</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your Name"
                className="w-full p-3 rounded border border-gray-600 bg-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Email *</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full p-3 rounded border border-gray-600 bg-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Resume Link</label>
              <input
                value={form.resume}
                onChange={(e) => setForm({ ...form, resume: e.target.value })}
                placeholder="Google Drive / GitHub / LinkedIn"
                className="w-full p-3 rounded border border-gray-600 bg-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Why do you want to join?</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Write a short note..."
                className="w-full p-3 rounded border border-gray-600 bg-transparent"
              ></textarea>
            </div>

            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => {
                  setSelected(null);
                  setForm({ name: '', email: '', resume: '', message: '' });
                  setSubmitted(false);
                  setError(false);
                }}
                className="px-4 py-2 border rounded text-gray-300 hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-medium"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default Careers;
