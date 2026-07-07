"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!form.name.trim()) tempErrors.name = "Name is required.";
    if (!form.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Invalid email format.";
    }
    if (!form.message.trim()) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Mock API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
          <p className="text-zinc-500 text-sm mt-3 font-mono">
            Interested in starting a project or data model? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Card column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-zinc-100">
              Let's build something exceptional.
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              Ready to collaborate on a data analytics project, build an online presence for your business, establish search authority, or leverage customized AI solutions? Fill out the form or reach out directly.
            </p>

            <div className="space-y-4 pt-4 border-t border-zinc-800">
              
              {/* Phone item */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">Mobile Phone</span>
                  <a href="tel:+254725455307" className="text-sm font-bold text-white hover:text-emerald-400 font-mono transition-colors">
                    +254 725 455 307
                  </a>
                </div>
              </div>

              {/* Email business item */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">Official Email</span>
                  <a href="mailto:email@josephwanyoike.com" className="text-sm font-bold text-white hover:text-cyan-400 font-mono transition-colors">
                    email@josephwanyoike.com
                  </a>
                </div>
              </div>

              {/* Email alternative item */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-indigo-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">Alternate Email</span>
                  <a href="mailto:shjz.dev@gmail.com" className="text-sm font-bold text-white hover:text-indigo-400 font-mono transition-colors">
                    shjz.dev@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-white/[0.01] border border-white/5 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  {errors.name && <span className="text-xs text-red-400 font-mono mt-1 block">{errors.name}</span>}
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">Your Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  {errors.email && <span className="text-xs text-red-400 font-mono mt-1 block">{errors.email}</span>}
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-mono text-zinc-400 block mb-1">Your Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
                {errors.message && <span className="text-xs text-red-400 font-mono mt-1 block">{errors.message}</span>}
              </div>

              {/* Success Feedback Alert */}
              {isSubmitted && (
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  &#10003; Thank you! Your message has been sent successfully. Joseph will get back to you shortly.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 disabled:bg-zinc-800 text-black font-bold rounded-lg text-sm transition-all duration-300 transform active:scale-95"
              >
                {isSubmitting ? "Sending..." : "Submit Message"}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
