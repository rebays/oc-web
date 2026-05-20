import { Link2, Globe, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#002b47] px-8 py-16 text-[#a8c8de]">
      <div className="mx-auto max-w-7xl">

        {/* 3 columns */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Logo */}
          <div className="flex flex-col gap-4">
            <span className="text-xl font-bold tracking-tight text-white">OrgClinic</span>
            <p className="max-w-xs text-sm leading-relaxed">
              Partnering with Solomon Islands leaders to build resilient, high-impact organizations.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 text-sm">
              <a href="#about" className="transition-colors hover:text-white">About</a>
              <a href="/people" className="transition-colors hover:text-white">Leadership</a>
              <a href="#contact" className="transition-colors hover:text-white">Contact</a>
              <a href="#" className="transition-colors hover:text-white">Privacy</a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              {[
                { icon: <Link2 size={16} />, label: "LinkedIn" },
                { icon: <Globe size={16} />, label: "Web" },
                { icon: <MessageCircle size={16} />, label: "Social" },
              ].map(({ icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-[#106c9d] hover:bg-[#106c9d] hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-white/10 pt-8 text-xs text-[#a8c8de]/40">
          © 2026 OrgClinic Consultancy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
