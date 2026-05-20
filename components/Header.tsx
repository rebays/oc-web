"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  ["Services", "#services"],
  ["About", "#about"],
  ["Team", "#team"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-300 ${
        scrolled ? "py-3 px-4" : "py-6 px-6"
      }`}
    >
      <nav
        className={`relative flex w-full max-w-7xl items-center justify-between px-6 py-3 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-[#dbeeff] shadow-lg shadow-[#004771]/5"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-[#004771] flex items-center justify-center shrink-0">
            <span className="text-white font-black text-[11px] tracking-tight">OC</span>
          </div>
          <span
            className={`text-lg font-bold tracking-tight leading-none transition-colors ${
              scrolled ? "text-[#002b47]" : "text-white"
            }`}
          >
            Org<span className="text-[#3b9fd4]">Clinic</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                scrolled
                  ? "text-zinc-600 hover:text-[#004771] hover:bg-[#f0f8ff]"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-xl bg-[#004771] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#106c9d] active:scale-95"
          >
            Get in touch
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex h-9 w-9 items-center justify-center rounded-lg md:hidden transition-colors ${
              scrolled
                ? "bg-[#f0f8ff] text-[#004771]"
                : "bg-white/10 text-white"
            }`}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="w-full max-w-7xl mt-2 mx-4 rounded-2xl bg-white border border-[#dbeeff] shadow-xl p-4 md:hidden">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-zinc-700 rounded-xl hover:bg-[#f0f8ff] hover:text-[#004771] transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center rounded-xl bg-[#004771] py-3 text-sm font-semibold text-white"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
