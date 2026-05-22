import Link from "next/link";
import { Link2, Globe, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-[#3b9fd4] bg-[#002b47] px-8 py-20 text-[#a8c8de]">
      <div className="mx-auto max-w-7xl">

        {/* 3 columns */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">

          {/* Logo */}
          <div className="flex flex-col gap-4">
            <span className="text-xl text-white" style={{ fontFamily: "var(--font-evermore)" }}>orgclinic</span>
            <p className="max-w-xs text-sm leading-relaxed">
              Partnering with Solomon Islands leaders to build resilient, high-impact organizations.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 text-sm md:grid-cols-4">
            {[
              { title: "What we do", links: [["About", "/about"], ["Process", "/process"], ["Services", "/services"]] },
              { title: "Our Work", links: [["Projects", "/our-projects"]] },
              { title: "Workplace", links: [["People", "/people"], ["Careers", "/careers"]] },
              { title: "Content", links: [["Publications", "/publications"], ["Articles", "/articles"], ["Contact", "/contact"]] },
            ].map(({ title, links }) => (
              <div key={title} className="flex flex-col gap-3">
                <span className="text-xs font-light uppercase tracking-widest text-[#3b9fd4]">{title}</span>
                {links.map(([label, href]) => (
                  <Link key={label} href={href} className="transition-colors hover:text-white">{label}</Link>
                ))}
              </div>
            ))}
          </div>

          {/* Socials */}
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

        {/* Copyright */}
        <div className="mt-16 pt-8 flex items-center justify-between text-xs text-[#a8c8de]/40">
          <span>© 2026 OrgClinic Consultancy. All rights reserved.</span>
          <span>built by <a href="https://rebays.com" className="underline underline-offset-4 transition-colors hover:text-[#a8c8de]">rebays</a></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
