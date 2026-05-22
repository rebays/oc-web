"use client";

import Link from "next/link";
import { Menu, X, Link2, Globe, MessageCircle, Search } from "lucide-react";
import { useState, useEffect } from "react";

const navSections = [
  {
    title: "What we do",
    links: [
      ["About", "/about"],
      ["Process", "/process"],
      ["Services", "/services"],
    ],
  },
  {
    title: "Our Work",
    links: [
      ["Projects", "/our-projects"],
    ],
  },
  {
    title: "Workplace",
    links: [
      ["People", "/people"],
      ["Careers", "/careers"],
    ],
  },
  {
    title: "Content",
    links: [
      ["Publications", "/publications"],
      ["Articles", "/articles"],
      ["Contact", "/contact"],
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY <= window.innerHeight;
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10;
      setScrolled(!atTop && !atBottom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled && !menuOpen ? "bg-white shadow-sm" : "bg-transparent"
      }`}>
        <nav className="relative flex w-full items-center justify-between px-8 py-5">

          {/* Logo */}
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <span className={`text-sm leading-none transition-colors duration-300 ${
              menuOpen ? "text-[#002b47]" : scrolled ? "text-[#002b47]" : "text-white"
            }`} style={{ fontFamily: "var(--font-evermore)" }}>
              orgclinic
            </span>
          </Link>

          {/* Search bar — centered, visible when menu open */}
          <div className={`absolute left-1/2 -translate-x-1/2 w-full max-w-sm transition-all duration-300 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}>
            <div className="flex items-center gap-3 rounded-full border border-[#dbeeff] bg-white px-5 py-2.5 shadow-sm">
              <Search size={15} className="shrink-0 text-[#106c9d]" />
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent text-sm text-[#002b47] placeholder-zinc-400 outline-none"
              />
            </div>
          </div>

          {/* Menu / Exit button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-60 transition-opacity hover:opacity-80"
          >
            <div className={`flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-bold transition-colors duration-300 ${menuOpen ? "bg-transparent text-[#106c9d]" : "bg-[#004771] text-white"}`}>
              {menuOpen ? (
                <>Exit <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#106c9d] text-[#106c9d]"><X size={14} /></span></>
              ) : (
                <>Menu <Menu size={20} /></>
              )}
            </div>
          </button>
        </nav>
      </header>

      {/* Full-screen overlay */}
      <div className={`fixed inset-0 z-40 flex flex-col items-center bg-[#f0f8ff] pt-40 transition-all duration-500 ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <nav className={`grid grid-cols-2 gap-x-12 gap-y-10 px-12 transition-all duration-500 md:grid-cols-4 md:gap-x-20 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {navSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <span className="text-xs font-light uppercase tracking-widest text-[#106c9d]">
                {section.title}
              </span>
              <div className="flex flex-col gap-2">
                {section.links.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-black text-[#002b47] transition-colors hover:text-[#106c9d] md:text-3xl"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Social links */}
        <div className={`absolute bottom-10 flex gap-3 transition-all duration-500 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {[
            { icon: <Link2 size={20} />, label: "LinkedIn" },
            { icon: <Globe size={20} />, label: "Web" },
            { icon: <MessageCircle size={20} />, label: "Social" },
          ].map(({ icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#dbeeff] bg-white text-[#106c9d] transition-all hover:border-[#106c9d] hover:bg-[#106c9d] hover:text-white"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
