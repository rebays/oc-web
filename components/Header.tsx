"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  ["About", "#about"],
  ["Services", "#services"],
  ["People", "/people"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled && !menuOpen ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="flex w-full items-center justify-between px-8 py-5">

          {/* Logo */}
          <a href="#" onClick={() => setMenuOpen(false)}>
            <span className={`text-2xl font-bold tracking-tight leading-none transition-colors duration-300 ${
              menuOpen ? "text-white" : scrolled ? "text-[#002b47]" : "text-white"
            }`}>
              orgclinic
            </span>
          </a>

          {/* Menu / Exit button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[60] transition-opacity hover:opacity-80"
          >
            <div className="flex items-center gap-2.5 rounded-full bg-[#004771] px-5 py-3 text-sm font-bold text-white">
              {menuOpen ? (
                <>Exit <X size={20} /></>
              ) : (
                <>Menu <Menu size={20} /></>
              )}
            </div>
          </button>
        </nav>
      </header>

      {/* Full-screen overlay */}
      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#002b47] transition-all duration-500 ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <nav className={`flex flex-col items-center gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {navLinks.map(([label, href]) =>
            href.startsWith("/") ? (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-black text-white transition-colors hover:text-[#3b9fd4] md:text-6xl"
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-black text-white transition-colors hover:text-[#3b9fd4] md:text-6xl"
              >
                {label}
              </a>
            )
          )}
        </nav>
      </div>
    </>
  );
}
