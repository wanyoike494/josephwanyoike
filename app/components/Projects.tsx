import React from "react";

export default function Projects() {
  const projectList = [
    {
      title: "World Data Analysis (WDA) Project",
      subtitle: "Flagship Project",
      description:
        "A premium data journalism website that tells compelling stories about our world. Using clean interactive visualizations, we transform massive datasets on global demographics, carbon emissions, and economic outputs into public insights.",
      url: "https://www.worlddataanalysis.com",
      urlLabel: "worlddataanalysis.com",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "D3.js / SVG", "Django"],
      category: "Data Science",
      color: "border-cyan-500/20 text-cyan-400 shadow-cyan-950/10",
      accentBg: "bg-cyan-500/5",
    },
    {
      title: "WDA Finance",
      subtitle: "Quantitative Ventures",
      description:
        "A dedicated platform for financial analytics, investment research, and economic risk models. Features calculators for compound portfolios, inflation projections, and credit risk scoring matrices.",
      url: "https://www.wdafinance.com",
      urlLabel: "wdafinance.com",
      tech: ["Next.js", "TypeScript", "Vanilla CSS", "Django", "Tailwind CSS"],
      category: "Finance & Economics",
      color: "border-emerald-500/20 text-emerald-400 shadow-emerald-950/10",
      accentBg: "bg-emerald-500/5",
    },
    {
      title: "WDA AI Labs",
      subtitle: "Artificial Intelligence Research",
      description:
        "Research and development hub for custom AI agents, business intelligence chatbots, and automation processes. Explores neural nets, semantic search indices, and large language model tuning.",
      url: "https://www.wdaailabs.com",
      urlLabel: "wdaailabs.com",
      tech: ["Next.js", "Express.js", "Python", "OpenAI APIs", "Vector DBs"],
      category: "AI & Automation",
      color: "border-violet-500/20 text-violet-400 shadow-violet-950/10",
      accentBg: "bg-violet-500/5",
    },
    {
      title: "NJW Code",
      subtitle: "Hobby Web Creations",
      description:
        "A sandbox archive hosting lightweight utilities, micro-games, and practical scripts built as coding hobbies. From math utilities to mini JS tools, NJW Code is a space for programming exploration.",
      url: "https://njwcode.vercel.app",
      urlLabel: "njwcode.vercel.app",
      tech: ["Next.js", "React", "JavaScript", "Vite", "Netlify / Vercel"],
      category: "Development Sandbox",
      color: "border-amber-500/20 text-amber-400 shadow-amber-950/10",
      accentBg: "bg-amber-500/5",
    },
    {
      title: "NJW Digital Marketing",
      subtitle: "Business Visibility & Growth",
      description:
        "Helping SMEs and local businesses establish an online presence. We build custom websites, execute search engine optimization (SEO) strategies, and construct social media marketing campaigns.",
      url: "#contact",
      urlLabel: "Get presence online",
      tech: ["SEO Audits", "Custom Web Development", "Analytics", "SME Strategy"],
      category: "Digital Growth",
      color: "border-pink-500/20 text-pink-400 shadow-pink-950/10",
      accentBg: "bg-pink-500/5",
    },
  ];

  return (
    <section id="projects" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
          <p className="text-zinc-500 text-sm mt-3 font-mono">
            Explore active directories, research projects, and web platforms
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-white/[0.01] border ${project.color} backdrop-blur-sm glow-interactive flex flex-col justify-between h-full shadow-lg`}
            >
              <div>
                {/* Category Badge & Subtitle */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {project.subtitle}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* URL Button */}
                <a
                  href={project.url}
                  target={project.url.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-cyan-400 transition-colors group/link"
                >
                  {project.urlLabel}
                  <svg
                    className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
