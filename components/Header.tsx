"use client";

import { Shield, ArrowRight, Sun, Moon, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    
    
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${scrolled ? "p-3" : "p-6"}`}>
      <nav 
        className={`
          relative flex w-full max-w-7xl items-center justify-between px-6 py-2.5 transition-all duration-500
          rounded-2xl border
          ${scrolled 
            ? "border-zinc-200/80 bg-white/80 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/80 shadow-sm" 
            : "border-transparent bg-transparent shadow-none"
          }
        `}
      >
        {/* LOGO SECTION */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white leading-none">
              Org<span className="text-[#106c9d]">Clinic</span>
            </span>
          </div>
        </div>

        {/* NAVIGATION - Minimalist style */}
        <div className="hidden items-center gap-1 md:flex">
          {[
            ["Services", "#services"],
            ["About", "#about"],
            ["Insights", "#insights"],
            ["Contact", "#contact"]
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-[#106c9d] dark:text-zinc-400 dark:hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        {/* RIGHT ACTION AREA */}
        <div className="flex items-center gap-3">
         

          {/* SOPHISTICATED CTA */}
          <a
            href="#contact"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-lg bg-[#004771] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#106c9d] active:scale-95 sm:flex"
          >
            <span className="relative z-10">Get in touch</span>
            {/* <ArrowRight size={14} className="relative z-10 transition-transform group-hover:translate-x-1" /> */}
          </a>

          {/* MOBILE MENU */}
          <button type="button" aria-label="Open menu" className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white md:hidden">
            <Menu size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
}