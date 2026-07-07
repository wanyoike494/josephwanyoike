import React from "react";

export default function Footer() {
  const footerSocials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/joseph-wanyoike-njoroge-a020a9207/", icon: "LinkedIn" },
    { name: "GitHub", href: "https://github.com/wanyoike494", icon: "GitHub" },
    { name: "WhatsApp", href: "https://wa.me/+254725455307", icon: "WhatsApp" },
    { name: "Facebook", href: "https://www.facebook.com/joseph.wanyoike.712", icon: "Facebook" },
    { name: "Instagram", href: "https://www.instagram.com/wanyoike274/", icon: "Instagram" },
    { name: "Twitter/X", href: "https://x.com/wanyoike274", icon: "Twitter/X" },
    { name: "Threads", href: "https://www.threads.net/@wanyoike274", icon: "Threads" },
    { name: "Email", href: "mailto:email@josephwanyoike.com", icon: "Email" },
    { name: "Phone", href: "tel:+254725455307", icon: "Phone" },
  ];

  const wdaTopics = [
    "Demographics & Fertility Rates",
    "Carbon Outputs vs GDP Metrics",
    "Energy Grid & Resource Allocations",
    "Global Trade Flow Correlations",
  ];

  const financeTopics = [
    "Discounted Cash Flow (DCF) Models",
    "Credit Scoring Matrix Logic",
    "Risk Arbitrage Probabilities",
    "Fintech Automation Architectures",
  ];

  const aiTopics = [
    "Multi-Agent Workflow Pipelines",
    "NLP-to-SQL DB Translation",
    "Vector Embeddings & Semantic Search",
    "SME Conversational Chatbots",
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Segment: Detailed Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: NJW Brief */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold font-mono tracking-wider uppercase">
              Joseph Wanyoike (NJW)
            </h4>
            <p className="text-xs text-zinc-550 leading-relaxed">
              An Economics, Finance, and Software engineering practitioner. Developing analytical solutions that parse data, model financial pathways, and automate workflows via intelligent AI systems.
            </p>
            <div className="text-[11px] text-zinc-500 font-mono space-y-1">
              <span className="block">Location: Nairobi, Kenya</span>
              <span className="block">Timezone: UTC+3 (EAT)</span>
            </div>
          </div>

          {/* Column 2: WDA Project Highlighted Topics */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold font-mono tracking-wider uppercase">
              WDA Journalism Insights
            </h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              {wdaTopics.map((topic, i) => (
                <li key={i} className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-cyan-500" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: WDA Finance Topics */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold font-mono tracking-wider uppercase">
              WDA Finance Quant
            </h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              {financeTopics.map((topic, i) => (
                <li key={i} className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: WDA AI Labs & Marketing */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold font-mono tracking-wider uppercase">
              WDA AI Labs & SEO
            </h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              {aiTopics.map((topic, i) => (
                <li key={i} className="hover:text-violet-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-violet-500" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Middle Segment: Extended Social Area */}
        <div className="pt-8 border-t border-zinc-900 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
              Extended Social Directory (9 Channels)
            </span>
            <div className="flex flex-wrap justify-center gap-3">
              {footerSocials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:text-white hover:border-zinc-700 transition-all font-mono"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Segment: Copyright & Attribution */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-600 gap-4">
          <p className="font-mono">
            &copy; {new Date().getFullYear()} Joseph Wanyoike Njoroge (NJW). All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-mono">
            Made with love using{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white font-bold transition-colors underline decoration-dotted"
            >
              Next.js
            </a>{" "}
            by Joseph Wanyoike Njoroge
          </p>
        </div>

      </div>
    </footer>
  );
}
