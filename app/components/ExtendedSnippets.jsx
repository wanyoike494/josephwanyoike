"use client";

import React, { useState, useEffect } from "react";

export default function ExtendedSnippets() {
  const [activeTab, setActiveTab] = useState("data");

  // --- WDA Data Journalism State ---
  const [selectedRegion, setSelectedRegion] = useState("global");
  const regionData = {
    global: { population: "8.1B", gdp: "$105T", lifeExp: "73 yrs", co2: "4.8 tons/capita" },
    africa: { population: "1.4B", gdp: "$3.1T", lifeExp: "64 yrs", co2: "1.1 tons/capita" },
    asia: { population: "4.7B", gdp: "$41T", lifeExp: "74 yrs", co2: "4.5 tons/capita" },
    europe: { population: "745M", gdp: "$24T", lifeExp: "79 yrs", co2: "6.2 tons/capita" },
    americas: { population: "1.0B", gdp: "$31T", lifeExp: "77 yrs", co2: "8.5 tons/capita" },
  };

  // --- WDA Finance Calculator State ---
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(10);
  const [compBalance, setCompBalance] = useState(0);

  useEffect(() => {
    const amount = principal * Math.pow(1 + rate / 100, years);
    setCompBalance(amount.toFixed(2));
  }, [principal, rate, years]);

  // --- WDA AI Labs Chatbot State ---
  const [chatLog, setChatLog] = useState([
    {
      sender: "ai",
      text: "WDA AI Labs Agent: Welcome to the terminal. I am trained on economic analyses, automated quantitative agents, and financial models. Pick an option below or ask me a query.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const presetQuestions = [
    { q: "Explain WDA Project's core mission.", a: "The World Data Analysis (WDA) Project acts as a data journalism platform. We translate huge datasets like carbon outputs, demographic shifts, and economic growth metrics into stories people can read and understand, bridging the gap between raw data science and the general public." },
    { q: "What does WDA AI Labs do?", a: "WDA AI Labs creates customized AI chatbots, autonomous business agents, and research processes. We design solutions for small-to-medium enterprises to automate routine tasks, handle database queries via NLP, and build conversational frontends." },
    { q: "What calculations are planned for the Django backend?", a: "Django handles computation-heavy modules like multi-year compound interest graphs, credit scoring probability matrix calculations, and time-series ARIMA prediction models for global demographic indices." },
  ];

  const handleSendMessage = (text, replyText) => {
    if (isTyping) return;
    setChatLog((prev) => [...prev, { sender: "user", text }]);
    setIsTyping(true);

    setTimeout(() => {
      setChatLog((prev) => [...prev, { sender: "ai", text: replyText }]);
      setIsTyping(false);
    }, 1000);
  };

  // --- NJW Code Sandbox State ---
  const [encodeInput, setEncodeInput] = useState("Hello NJW!");
  const [encodeOutput, setEncodeOutput] = useState("");
  const [decodeInput, setDecodeInput] = useState("SGVsbG8gTkpXIQ==");
  const [decodeOutput, setDecodeOutput] = useState("");

  const handleEncode = () => {
    try {
      setEncodeOutput(btoa(encodeInput));
    } catch (e) {
      setEncodeOutput("Encoding Error: invalid characters.");
    }
  };

  const handleDecode = () => {
    try {
      setDecodeOutput(atob(decodeInput));
    } catch (e) {
      setDecodeOutput("Decoding Error: invalid base64 string.");
    }
  };

  useEffect(() => {
    handleEncode();
  }, [encodeInput]);

  useEffect(() => {
    handleDecode();
  }, [decodeInput]);

  // --- NJW Digital Marketing SEO Audit State ---
  const [seoUrl, setSeoUrl] = useState("www.mybusiness.com");
  const [seoStatus, setSeoStatus] = useState("idle"); // idle | loading | done
  const [seoReport, setSeoReport] = useState(null);

  const triggerSeoAudit = () => {
    setSeoStatus("loading");
    setSeoReport(null);
    setTimeout(() => {
      setSeoStatus("done");
      // Calculate scores dynamically based on length of input just for fun
      const score = Math.floor(Math.random() * 20) + 75;
      setSeoReport({
        score,
        details: [
          { item: "Meta Title & Description Tags", pass: true, desc: "Tags are present and within length bounds." },
          { item: "SSL Certificate (HTTPS Check)", pass: seoUrl.startsWith("https://"), desc: seoUrl.startsWith("https://") ? "Valid SSL active." : "Insecure HTTP. Strongly recommended to redirect to HTTPS." },
          { item: "Heading Structure Hierarchy", pass: true, desc: "Found exactly one H1 tag with structured H2/H3 subsets." },
          { item: "Mobile Accessibility Score", pass: score > 85, desc: "Interactive touch targets and viewport properties are optimized." },
          { item: "LCP Load Speed (FCP estimate)", pass: score > 80, desc: "Largest Contentful Paint is under 2.1 seconds." },
        ],
      });
    }, 1500);
  };

  return (
    <section id="workspace" className="py-24 border-t border-white/5 bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Extended Workspace Mode Activated
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-4 mb-2">
            Project Snippets & Interactive Demos
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full" />
          <p className="text-zinc-500 text-sm mt-3 max-w-2xl mx-auto">
            Interact with visual modules demonstrating the technologies and calculations behind WDA, WDA Finance, WDA AI Labs, NJW Code, and SEO growth engines.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {[
            { id: "data", label: "WDA Data Insights", color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/5" },
            { id: "finance", label: "WDA Finance Tools", color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
            { id: "ai", label: "WDA AI Labs Terminal", color: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
            { id: "code", label: "NJW Code Sandbox", color: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
            { id: "seo", label: "SEO Marketing Audit", color: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl border text-xs font-mono font-bold transition-all duration-300 ${activeTab === tab.id
                  ? tab.color + " ring-1 ring-white/10"
                  : "border-white/5 text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02]"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Snippet Card Panel */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl min-h-[450px] flex flex-col justify-between">

          {/* 1. DATA JOURNALISM SNIPPET */}
          {activeTab === "data" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                  WDA Project Snippet
                </span>
                <h3 className="text-xl font-bold text-white">
                  Demographic & Emissions Index
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Data journalism demands clean extraction and simple display. Click on regions to update the data visualization block. WDA Project uses these indicators to contextualize policy debates.
                </p>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(regionData).map((reg) => (
                    <button
                      key={reg}
                      onClick={() => setSelectedRegion(reg)}
                      className={`px-3 py-1 rounded text-xs font-mono capitalize transition-all ${selectedRegion === reg
                          ? "bg-cyan-500 text-black font-bold"
                          : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-zinc-200"
                        }`}
                    >
                      {reg}
                    </button>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
                <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                  <span className="text-xs font-mono text-zinc-400 uppercase">
                    Active Dataset: <span className="text-cyan-400 font-bold capitalize">{selectedRegion}</span>
                  </span>
                  <span className="text-[10px] font-mono text-zinc-600">Updated: Realtime Sandbox</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-zinc-900/50 rounded-xl border border-zinc-800/40">
                    <span className="text-[10px] text-zinc-500 font-mono block">Estimated Population</span>
                    <span className="text-lg font-bold text-white mt-1 block">
                      {regionData[selectedRegion].population}
                    </span>
                  </div>
                  <div className="p-3 bg-zinc-900/50 rounded-xl border border-zinc-800/40">
                    <span className="text-[10px] text-zinc-500 font-mono block">Aggregate GDP (Nominal)</span>
                    <span className="text-lg font-bold text-white mt-1 block">
                      {regionData[selectedRegion].gdp}
                    </span>
                  </div>
                  <div className="p-3 bg-zinc-900/50 rounded-xl border border-zinc-800/40">
                    <span className="text-[10px] text-zinc-500 font-mono block">Life Expectancy at Birth</span>
                    <span className="text-lg font-bold text-white mt-1 block">
                      {regionData[selectedRegion].lifeExp}
                    </span>
                  </div>
                  <div className="p-3 bg-zinc-900/50 rounded-xl border border-zinc-800/40">
                    <span className="text-[10px] text-zinc-500 font-mono block">CO2 Output per Capita</span>
                    <span className="text-lg font-bold text-white mt-1 block">
                      {regionData[selectedRegion].co2}
                    </span>
                  </div>
                </div>

                {/* SVG Visual Bar Graphic */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-zinc-500 block">Emissions Scaling Reference</span>
                  <div className="h-4 bg-zinc-900 rounded-full overflow-hidden flex">
                    <div
                      className="bg-cyan-500 h-full transition-all duration-500 ease-out"
                      style={{
                        width:
                          selectedRegion === "global"
                            ? "50%"
                            : selectedRegion === "africa"
                              ? "15%"
                              : selectedRegion === "asia"
                                ? "48%"
                                : selectedRegion === "europe"
                                  ? "68%"
                                  : "90%",
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-zinc-650">
                    <span>0t</span>
                    <span>5t</span>
                    <span>10t</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. WDA FINANCE compound Interest calculator */}
          {activeTab === "finance" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                  WDA Finance Snippet
                </span>
                <h3 className="text-xl font-bold text-white">
                  Compound Portfolio Estimator
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  A classic valuation component. In WDA Finance, we run similar models (such as discounted cash flows and credit risk metrics) dynamically on the client and Django servers.
                </p>
                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] font-mono text-zinc-500 block mb-1">
                      Initial Capital ($):
                    </label>
                    <input
                      type="number"
                      value={principal}
                      onChange={(e) => setPrincipal(Number(e.target.value))}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded p-2 text-xs font-mono focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-mono text-zinc-500 block mb-1">
                        Interest Rate (%):
                      </label>
                      <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(Number(e.target.value))}
                        className="w-full bg-zinc-900 border border-zinc-800 text-white rounded p-2 text-xs font-mono focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-zinc-500 block mb-1">
                        Term (Years):
                      </label>
                      <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="w-full bg-zinc-900 border border-zinc-800 text-white rounded p-2 text-xs font-mono focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-center text-center space-y-4">
                <span className="text-xs font-mono text-zinc-500">Estimated Accumulation Value</span>
                <span className="text-3xl sm:text-4xl font-bold font-mono text-emerald-400">
                  ${Number(compBalance).toLocaleString()}
                </span>
                <p className="text-xs text-zinc-500">
                  Calculated based on compound interest formula: <br />
                  <code className="text-emerald-500 bg-zinc-900 px-2 py-0.5 rounded text-[10px]">
                    A = P(1 + r)^n
                  </code>
                </p>

                {/* SVG Visual Compound Projection Chart */}
                <div className="pt-2">
                  <svg className="w-full h-24 overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path
                      d={`M 0 30 Q 30 ${30 - (compBalance / (principal * 3)) * 10} 100 ${30 - (compBalance / (principal * 4)) * 20}`}
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="100"
                      cy={30 - (compBalance / (principal * 4)) * 20}
                      r="2"
                      fill="#10b981"
                      className="animate-ping"
                    />
                  </svg>
                  <div className="flex justify-between text-[8px] font-mono text-zinc-650 mt-1">
                    <span>Year 0</span>
                    <span>Year {years}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. WDA AI LABS terminal chat */}
          {activeTab === "ai" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest">
                  WDA AI Labs Snippet
                </span>
                <h3 className="text-xl font-bold text-white">
                  Autonomous Labs Console
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Testing chatbot interfaces and intelligent agent processes. Click one of the queries below to prompt the simulated WDA Agent.
                </p>
                <div className="flex flex-col gap-2">
                  {presetQuestions.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(item.q, item.a)}
                      disabled={isTyping}
                      className="p-2.5 rounded text-left text-xs bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-violet-500/30 transition-all font-mono"
                    >
                      &gt; {item.q}
                    </button>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col h-72 rounded-2xl bg-black border border-zinc-800 p-4 font-mono text-xs overflow-hidden">
                <div className="flex items-center gap-1.5 border-b border-zinc-900 pb-2 mb-3 text-zinc-500">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-[10px]">WDA_AI_CONSOLE v1.0.0</span>
                </div>
                <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-zinc-300">
                  {chatLog.map((msg, index) => (
                    <div
                      key={index}
                      className={`p-2 rounded max-w-[85%] ${msg.sender === "ai"
                          ? "bg-violet-950/10 text-violet-300 self-start border border-violet-950/20"
                          : "bg-zinc-900 text-zinc-100 self-end ml-auto border border-zinc-850"
                        }`}
                    >
                      <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="text-violet-400 animate-pulse text-[10px] italic">
                      Agent is typing reply...
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 4. NJW CODE sandbox base64 */}
          {activeTab === "code" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                  NJW Code Program
                </span>
                <h3 className="text-xl font-bold text-white">
                  Developer Sandbox Toolkit
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  njwcode.vercel.app is focused on creating practical developer utilities. Encode and decode text to Base64 formats in real-time below.
                </p>
              </div>
              <div className="lg:col-span-7 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4 font-mono text-xs">
                {/* Encoder */}
                <div>
                  <label className="text-[10px] text-zinc-500 block mb-1">Base64 Encoder Input:</label>
                  <input
                    type="text"
                    value={encodeInput}
                    onChange={(e) => setEncodeInput(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-850 rounded p-2 text-white text-xs outline-none focus:border-amber-500"
                  />
                  <div className="mt-1.5 p-2 bg-black rounded border border-zinc-900 break-all text-amber-400 text-[11px]">
                    Result: <span className="text-white">{encodeOutput || "Empty"}</span>
                  </div>
                </div>

                {/* Decoder */}
                <div className="pt-2 border-t border-zinc-900">
                  <label className="text-[10px] text-zinc-500 block mb-1">Base64 Decoder Input:</label>
                  <input
                    type="text"
                    value={decodeInput}
                    onChange={(e) => setDecodeInput(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-850 rounded p-2 text-white text-xs outline-none focus:border-amber-500"
                  />
                  <div className="mt-1.5 p-2 bg-black rounded border border-zinc-900 break-all text-emerald-400 text-[11px]">
                    Result: <span className="text-white">{decodeOutput || "Empty"}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. NJW DIGITAL MARKETING seo audit */}
          {activeTab === "seo" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-mono text-pink-400 uppercase tracking-widest">
                  NJW Digital Marketing Snippet
                </span>
                <h3 className="text-xl font-bold text-white">
                  SEO Audit Simulator
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We build fast business portals and optimize search visibility. Run our quick analyzer to scan a mock webpage for SEO factors. For full SEO services, feel free to drop a line in the Contact section!
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={seoUrl}
                    onChange={(e) => setSeoUrl(e.target.value)}
                    placeholder="Enter website link..."
                    className="flex-1 bg-zinc-900 border border-zinc-800 text-white rounded p-2 text-xs font-mono focus:outline-none focus:border-pink-500"
                  />
                  <button
                    onClick={triggerSeoAudit}
                    disabled={seoStatus === "loading"}
                    className="px-4 py-2 bg-pink-500 hover:bg-pink-600 disabled:bg-zinc-800 text-black text-xs font-bold font-mono rounded transition-colors"
                  >
                    {seoStatus === "loading" ? "Scanning..." : "Audit"}
                  </button>
                </div>
              </div>
              <div className="lg:col-span-7 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 min-h-[220px] flex flex-col justify-center">
                {seoStatus === "idle" && (
                  <div className="text-center text-zinc-500 text-xs py-10 font-mono">
                    Enter a domain and trigger audit scan...
                  </div>
                )}

                {seoStatus === "loading" && (
                  <div className="text-center text-zinc-400 font-mono text-xs py-10 space-y-3">
                    <div className="w-8 h-8 rounded-full border-2 border-zinc-800 border-t-pink-500 animate-spin mx-auto" />
                    <p className="animate-pulse">Checking meta titles, heading structures, SSL configurations, page load metrics...</p>
                  </div>
                )}

                {seoStatus === "done" && seoReport && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-zinc-900 pb-3">
                      <span className="text-xs font-mono text-zinc-400">
                        Scan Domain: <span className="text-white font-bold">{seoUrl}</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-zinc-500">SEO Rating:</span>
                        <span className={`text-sm font-bold font-mono ${seoReport.score > 85 ? 'text-emerald-400' : 'text-pink-400'}`}>
                          {seoReport.score}/100
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                      {seoReport.details.map((det, i) => (
                        <div key={i} className="flex gap-2 items-start text-[11px] font-mono leading-tight">
                          <span>
                            {det.pass ? (
                              <span className="text-emerald-400 font-bold">&#10003;</span>
                            ) : (
                              <span className="text-pink-400 font-bold">&#9888;</span>
                            )}
                          </span>
                          <div>
                            <span className="font-bold text-white block">{det.item}</span>
                            <span className="text-zinc-500 text-[10px] block mt-0.5">{det.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
