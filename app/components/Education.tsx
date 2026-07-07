import React from "react";

export default function Education() {
  const educations = [
    {
      degree: "Bachelor of Science in Economics",
      institution: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
      period: "Completed in 2018",
      description:
        "Rigorous training in economic theory, econometric modeling, financial systems, and advanced statistics. Formed the foundation for quantitative risk and data analysis.",
    },
    {
      degree: "Certified Investment and Financial Analyst (CIFA)",
      institution: "KASNEB",
      period: "Completed Professional Qualification",
      description:
        "In-depth curriculum covering corporate finance, equity product analysis, portfolio management, asset valuation, and derivatives.",
    },
    {
      degree: "Data Science and AI Post-Graduate",
      institution: "WorldQuant University",
      period: "Completed in 2025",
      description:
        "Applied machine learning, statistical modeling, exploratory data analysis, and neural network algorithms using Python.",
    },
    {
      degree: "Financial Analyst & Technology Certifications",
      institution: "Corporate Finance Institute (CFI)",
      period: "Completed in 2025",
      description:
        "Professional credentials in FMVA (Financial Modeling & Valuation), CBCA (Commercial Banking & Credit), Fintech, BIDA (Business Intelligence & Data Analysis), CMSA (Capital Markets), and FPWMA.",
    },
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-bold text-zinc-200 font-mono tracking-wider mb-6 flex items-center gap-2">
        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
        Education & Credentials
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educations.map((edu, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start gap-4 mb-2">
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {edu.degree}
                </h4>
              </div>
              <p className="text-xs text-zinc-500 font-medium mb-3">{edu.institution}</p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">{edu.description}</p>
            </div>
            <span className="self-start px-2.5 py-0.5 text-[10px] font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
              {edu.period}
            </span>
          </div>
        ))}
      </div>

      {/* Note for future qualifications */}
      <div className="p-4 rounded-lg bg-zinc-900/50 border border-dashed border-zinc-800 flex items-center justify-between mt-6">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs text-zinc-500 font-mono">
            Ongoing Professional Development
          </span>
        </div>
        <span className="text-[11px] text-zinc-400 italic">
          More qualifications will be added here soon...
        </span>
      </div>
    </div>
  );
}
