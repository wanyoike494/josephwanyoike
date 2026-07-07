import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Lead Data Analyst",
      company: "World Data Analysis (WDA) Project",
      period: "2019 - Present",
      description:
        "Directing key data operations and statistical models to enable high-quality data journalism. Focused on compiling global databases, writing extraction scripts, and rendering interactive dashboards mapping macro socio-economic indicators.",
      details: [
        "Created scalable quantitative methodologies for compiling multi-source national indicators.",
        "Optimized database architectures to facilitate rapid queries for high-volume geographical data.",
        "Collaborated with data journalists to design insightful stories about our world.",
      ],
      color: "border-cyan-500/30 text-cyan-400",
    },
    {
      role: "Computer Developer",
      company: "Freelance & Independent Projects (NJW Code)",
      period: "2018 - Present",
      description:
        "Building production-grade client applications and hobby microprograms. Specialized in crafting clean, SEO-optimized frontends using Next.js and building robust API infrastructures.",
      details: [
        "Designed the codebase for www.worlddataanalysis.com using Next.js and Tailwind CSS.",
        "Built NJW Code platform to prototype and host interactive JavaScript microprograms.",
        "Designed backend architectures integrating Node.js and Django to streamline computation modules.",
      ],
      color: "border-emerald-500/30 text-emerald-400",
    },
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-bold text-zinc-200 font-mono tracking-wider mb-6 flex items-center gap-2">
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Professional Experience
      </h3>

      <div className="relative border-l border-zinc-800 ml-4 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Timeline node */}
            <span className="absolute -left-[9px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-cyan-400 transition-colors duration-300">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-650 group-hover:bg-cyan-400" />
            </span>

            {/* Content card */}
            <div className="p-6 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 group-hover:border-zinc-800 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-sm text-zinc-400 font-medium">{exp.company}</p>
                </div>
                <span className="self-start sm:self-center px-3 py-1 text-xs font-mono rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="text-xs text-zinc-500 flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">&bull;</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
