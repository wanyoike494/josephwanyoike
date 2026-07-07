"use client";

import { useState } from "react";

interface NavbarProps {
  isExtended: boolean;
  setIsExtended: (val: boolean) => void;
}

export default function Navbar({ isExtended, setIsExtended }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Qualifications", href: "#qualifications" },
    { name: "Projects", href: "#projects" },
    ...(isExtended ? [{ name: "Workspace Insights", href: "#workspace" }] : []),
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#hero" className="flex items-center gap-2 group">
              <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent group-hover:opacity-85 transition-opacity">
                NJW
              </span>
              <span className="hidden sm:inline-block text-xs text-zinc-400 font-mono tracking-widest uppercase border-l border-zinc-700 pl-2">
                Joseph W. Njoroge
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </div>

            {/* Mode Switcher Toggle */}
            <div className="flex items-center gap-3 pl-4 border-l border-zinc-800">
              <span className={`text-xs font-medium transition-colors duration-300 ${!isExtended ? 'text-emerald-400' : 'text-zinc-500'}`}>
                Standard
              </span>
              <button
                onClick={() => setIsExtended(!isExtended)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                aria-label="Toggle Extended Workspace"
              >
                <span
                  className={`${
                    isExtended ? "translate-x-6 bg-cyan-400" : "translate-x-1 bg-emerald-400"
                  } inline-block h-4 w-4 transform rounded-full transition-transform duration-300`}
                />
              </button>
              <span className={`text-xs font-medium transition-colors duration-300 ${isExtended ? 'text-cyan-400' : 'text-zinc-500'}`}>
                Extended
              </span>
            </div>
          </div>

          {/* Mobile menu button & switcher */}
          <div className="flex md:hidden items-center gap-4">
            {/* Mode switcher for mobile */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsExtended(!isExtended)}
                className={`px-3 py-1 rounded-full text-[10px] font-mono border transition-all duration-300 ${
                  isExtended
                    ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                    : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                }`}
              >
                {isExtended ? "Extended Mode" : "Standard Mode"}
              </button>
            </div>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-zinc-950/95 border-b border-white/5`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
