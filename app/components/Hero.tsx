import React from "react";

export default function Hero() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/joseph-wanyoike-njoroge-a020a9207/",
      color: "hover:text-[#0077b5]",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/wanyoike494",
      color: "hover:text-white",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/+254725455307",
      color: "hover:text-[#25d366]",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.858-4.42 9.861-9.864.001-2.639-1.024-5.12-2.887-6.986-1.864-1.865-4.343-2.891-6.982-2.892-5.442 0-9.866 4.42-9.869 9.866-.001 1.79.471 3.535 1.365 5.067L1.93 20.6l4.717-1.446zm11.233-6.852c-.3-.15-1.771-.875-2.029-.969-.258-.094-.446-.14-.633.14-.187.281-.726.969-.889 1.157-.163.188-.327.21-.627.06-.3-.15-1.266-.467-2.41-1.485-.89-.794-1.49-1.775-1.665-2.075-.175-.3-.019-.462.131-.611.135-.134.3-.349.45-.524.15-.175.2-.299.3-.499.1-.2.05-.375-.025-.525-.075-.15-.633-1.527-.867-2.091-.228-.549-.479-.475-.633-.475-.164-.003-.353-.004-.543-.004-.19 0-.501.071-.762.349-.262.278-1.002.978-1.002 2.385 0 1.407 1.022 2.767 1.166 2.956.144.188 2.012 3.072 4.875 4.314.681.296 1.213.473 1.627.604.684.218 1.306.187 1.8.113.55-.082 1.771-.724 2.022-1.391.251-.667.251-1.238.176-1.391-.075-.153-.258-.243-.559-.393z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/joseph.wanyoike.712",
      color: "hover:text-[#1877f2]",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/wanyoike274/",
      color: "hover:text-[#c13584]",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="hero"
      className="relative pt-20 pb-20 md:pt-24 md:pb-28 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left order-2 lg:order-1">
            <span className="text-sm font-mono text-emerald-400 tracking-wider uppercase mb-3">
              Data Science &bull; Financial Analytics &bull; Software
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Hi, I am <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                Joseph Wanyoike Njoroge
              </span>
            </h1>

            {/* WDA Project Main Highlight */}
            <div className="mb-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
                Main Project
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-2">
                World Data Analysis (WDA) Project
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-4">
                WDA Project is a data journalism website telling stories about our world through analytical insights. We transform massive demographic, environmental, and socio-economic datasets into compelling visual stories.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href="https://www.worlddataanalysis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-black text-xs sm:text-sm font-semibold transition-colors duration-200"
                >
                  Visit WDA Project &rarr;
                </a>
              </div>
            </div>

            {/* Child Projects Grid links */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* WDA Finance */}
              <a
                href="https://www.wdafinance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <h3 className="text-sm font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">
                  WDA Finance
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Financial modeling & analysis child project.
                </p>
              </a>

              {/* WDA AI Labs */}
              <a
                href="https://www.wdaailabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-violet-500/30 transition-all group"
              >
                <h3 className="text-sm font-bold text-zinc-200 group-hover:text-violet-400 transition-colors">
                  WDA AI Labs
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  AI agents, chatbots, research & development.
                </p>
              </a>

              {/* NJW Digital Marketing */}
              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-cyan-500/30 transition-all">
                <h3 className="text-sm font-bold text-zinc-200">
                  NJW Digital Marketing
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  SEO, SME digital presence, website creations.
                </p>
              </div>
            </div>

            {/* Social Channels (Hero) */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <span className="text-zinc-500 text-xs font-mono tracking-widest uppercase">
                Connect
              </span>
              <div className="flex gap-4 text-zinc-400">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`transition-colors duration-200 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:mt-6 order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer glowing border square */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500 via-cyan-400 to-indigo-500 opacity-75 blur-[2px] transition-opacity duration-300 hover:opacity-90" />
              {/* Profile Image container */}
              <div className="absolute inset-[3px] rounded-[21px] overflow-hidden bg-zinc-950">
                <img
                  src="https://josephwanyoike.com/assets/img/Joseph%20Wanyoike.jpg"
                  alt="Joseph Wanyoike Njoroge"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 scale-[1.05] hover:scale-100"
                />
              </div>
              {/* Decorative detail */}
              <div className="absolute -bottom-2 -right-2 bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-[10px] py-1.5 px-3.5 rounded-lg shadow-lg">
                Lead Analyst @ WDA
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
