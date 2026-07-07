import React from "react";

export default function About() {
  const skills = {
    frontend: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Vanilla CSS",
      "HTML5 / CSS3",
    ],
    backend: [
      "Node.js (Express)",
      "Django (Python)",
      "PHP",
      "MongoDB",
      "MySQL / PostgreSQL",
      "RESTful APIs",
    ],
    financeAndData: [
      "Data Science & AI",
      "Financial Modeling (FMVA)",
      "Quantitative Economics",
      "Market & Credit Risk",
      "Data Journalism & Viz",
      "Power BI / Excel",
    ],
  };

  return (
    <section id="about" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
          <p className="text-zinc-500 text-sm mt-3 font-mono">
            Bridging Economics, Finance, and Advanced Software Development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-zinc-100">
              Passionate Economist, Data Scientist, & Developer
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              I have a strong academic and professional foundation in economics and corporate finance, blended with a deep love for computing. My career revolves around writing robust software, parsing complex datasets, and presenting data stories that explain how our world ticks.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              As the Lead Data Analyst for the <strong>WDA Project</strong>, I research global indicators and lead our technical architecture. When I'm not doing core analysis, I develop lightweight web experiments under the name <strong>NJW Code</strong> and help SMEs optimize their search engine footprint and digital strategy.
            </p>

            {/* Architecture Plan Card */}
            <div className="p-5 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
              <h4 className="text-sm font-bold text-indigo-400 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Backend Architecture Strategy
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                To support complex mathematical computations, statistical indexing, and financial risk models, I plan to leverage a hybrid backend. We utilize **Node.js (Express.js)** for lightweight, asynchronous API handling alongside a high-performance **Django (Python)** framework to execute complex scientific and quantitative calculations.
              </p>
            </div>
          </div>

          {/* Skills Column */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold text-zinc-200 font-mono tracking-wider">
              Core Technical Stack
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Frontend Card */}
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all duration-300">
                <h4 className="text-base font-bold text-cyan-400 mb-4 border-b border-zinc-800 pb-2">
                  Frontend
                </h4>
                <ul className="space-y-2">
                  {skills.frontend.map((skill) => (
                    <li key={skill} className="text-sm text-zinc-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Backend Card */}
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 transition-all duration-300">
                <h4 className="text-base font-bold text-indigo-400 mb-4 border-b border-zinc-800 pb-2">
                  Backend
                </h4>
                <ul className="space-y-2">
                  {skills.backend.map((skill) => (
                    <li key={skill} className="text-sm text-zinc-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Finance & Data Science Card */}
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                <h4 className="text-base font-bold text-emerald-400 mb-4 border-b border-zinc-800 pb-2">
                  Finance & Data
                </h4>
                <ul className="space-y-2">
                  {skills.financeAndData.map((skill) => (
                    <li key={skill} className="text-sm text-zinc-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
