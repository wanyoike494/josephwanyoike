"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ExtendedSnippets from "./components/ExtendedSnippets";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <div className="flex flex-col min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar isExtended={isExtended} setIsExtended={setIsExtended} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Qualifications Section (Experience & Education Side-by-Side) */}
        <section id="qualifications" className="py-24 border-t border-white/5 bg-zinc-950/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Experience />
              <Education />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Workspace Insights Section */}
        {isExtended ? (
          <div className="mode-transition opacity-100 scale-100">
            <ExtendedSnippets />
          </div>
        ) : (
          <section id="workspace-preview" className="py-24 border-t border-white/5 bg-zinc-950/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="p-8 rounded-3xl bg-gradient-to-tr from-emerald-950/10 via-cyan-950/10 to-indigo-950/10 border border-white/5 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl" />
                
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                  Extended Features Locked
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Activate Extended Workspace Insights
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-lg mx-auto">
                  Unlock interactive project dashboards, a live portfolio compound estimator, an automated AI agent terminal console, code playground widgets, and search engines SEO graders.
                </p>
                <button
                  onClick={() => {
                    setIsExtended(true);
                    // Smooth scroll to workspace section after toggle
                    setTimeout(() => {
                      document.getElementById("workspace")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 hover:opacity-90 text-black text-xs font-bold font-mono transition-opacity uppercase tracking-wider"
                >
                  Activate Extended Mode &rarr;
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Contact Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
