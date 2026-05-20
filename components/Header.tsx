"use client";

import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="flex w-full items-center justify-between px-8 py-5">

        {/* Logo */}
        <a href="#">
          <span className={`text-2xl font-bold tracking-tight leading-none transition-colors duration-300 ${
            scrolled ? "text-[#002b47]" : "text-white"
          }`}>
            orgclinic
          </span>
        </a>

        {/* Menu button */}
        <button
          type="button"
          aria-label="Open menu"
          className="transition-opacity hover:opacity-80"
        >
          <div className="flex items-center gap-2.5 rounded-full bg-[#004771] px-5 py-3 text-sm font-bold text-white">
            Menu
            <Menu size={20} />
          </div>
        </button>
      </nav>
    </header>
  );
}
