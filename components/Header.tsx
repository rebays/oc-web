"use client";

import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
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
        <a href="#">
          <span
            className={`text-lg font-bold tracking-tight leading-none transition-colors ${
              scrolled ? "text-[#002b47]" : "text-white"
            }`}
          >
            Org<span className="text-[#3b9fd4]">Clinic</span>
          </span>
        </a>

        {/* Menu button */}
        <button
          type="button"
          aria-label="Open menu"
          className={`flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-bold transition-colors ${
            scrolled
              ? "bg-[#004771] text-white hover:bg-[#106c9d]"
              : "bg-white/15 text-white hover:bg-white/25"
          }`}
        >
          Menu
          <Menu size={20} />
        </button>
      </nav>
    </header>
  );
}
