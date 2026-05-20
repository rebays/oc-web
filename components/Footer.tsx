import { Shield, MapPin, Phone, Link2, Globe, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: <Link2 size={16} />, label: "LinkedIn" },
  { icon: <Globe size={16} />, label: "Web" },
  { icon: <MessageCircle size={16} />, label: "Social" },
];

const footerLinks = [
  {
    title: "The Firm",
    links: [
      ["About OrgClinic", "#about"],
      ["Leadership", "#team"],
      ["Our Methodology", "#"],
      ["Impact Report", "#"],
    ],
  },
  {
    title: "Expertise",
    links: [
      ["Institutional Health", "#services"],
      ["Strategic Advisory", "#services"],
      ["Capacity Building", "#services"],
      ["Governance", "#services"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Case Studies", "#"],
      ["Policy Briefs", "#"],
      ["Diagnostic Tools", "#"],
      ["Blog", "#"],
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-[#002b47] pb-12 pt-24 text-[#a8c8de]">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* Top */}
        <div className="grid gap-16 border-b border-white/10 pb-20 lg:grid-cols-2 lg:gap-24">

          {/* Brand */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#106c9d] text-white shadow-lg">
                <Shield size={20} />
              </div>
              <div>
                <span className="block text-xl font-bold tracking-tight text-white leading-none">OrgClinic</span>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#3b9fd4]">Pacific Advisory</span>
              </div>
            </div>
            <p className="mb-8 max-w-sm leading-relaxed text-[#a8c8de]">
              Partnering with Solomon Islands leaders to build resilient, transparent, and high-impact organizations through international best practices.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#a8c8de] transition-all hover:border-[#106c9d] hover:bg-[#106c9d] hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#3b9fd4]">Advisory Insights</p>
            <p className="mb-6 text-lg font-semibold leading-snug text-white">
              Get the latest Pacific institutional insights delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Business Email"
                className="flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#a8c8de]/50 outline-none transition-all focus:border-[#106c9d]"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-xl bg-[#106c9d] px-5 py-3 font-bold text-white transition-all hover:bg-[#3b9fd4] active:scale-95"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-[11px] text-[#a8c8de]/40">
              By subscribing, you agree to our professional data policy.
            </p>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-12 py-20 md:grid-cols-4">
          {footerLinks.map((col, i) => (
            <div key={i} className="flex flex-col gap-5">
              <h5 className="text-sm font-bold uppercase tracking-widest text-white">{col.title}</h5>
              <div className="flex flex-col gap-3 text-sm">
                {col.links.map(([label, href], j) => (
                  <a key={j} href={href} className="transition-colors hover:text-white">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Address */}
          <div className="flex flex-col gap-5">
            <h5 className="text-sm font-bold uppercase tracking-widest text-white">Honiara HQ</h5>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#3b9fd4]" />
                <span>Level 2, Mendana Avenue,<br />Honiara, Solomon Islands</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-[#3b9fd4]" />
                <span>+677 23000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 md:flex-row">
          <div className="flex flex-wrap justify-center gap-8 text-[11px] font-medium uppercase tracking-widest">
            <span className="text-[#a8c8de]/30">© 2026 OrgClinic Advisory</span>
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Compliance</a>
            <a href="#" className="transition-colors hover:text-white">Cookies</a>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#a8c8de]/40">Based in</span>
            <span className="text-xs font-bold text-[#a8c8de]">🇸🇧 Solomon Islands</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
