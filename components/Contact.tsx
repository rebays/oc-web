import { Mail, MapPin, Phone, Send } from "lucide-react";

const contactInfo = [
  { icon: <MapPin size={18} />, label: "Our Office", value: "Mendana Avenue, Honiara, SI" },
  { icon: <Phone size={18} />, label: "Direct Line", value: "+677 23000" },
  { icon: <Mail size={18} />, label: "Email", value: "advisory@orgclinic.sb" },
];

function Contact() {
  return (
    <section id="contact" className="bg-[#f0f8ff] px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-[#dbeeff] bg-white shadow-2xl shadow-[#004771]/8 lg:flex">

          {/* Left: info */}
          <div className="relative overflow-hidden bg-[#002b47] p-10 md:p-16 lg:w-[40%] flex flex-col justify-between">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#004771] opacity-60" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#106c9d] opacity-20" />

            <div className="relative z-10">
              <span className="mb-8 inline-block rounded-xl border border-[#3b9fd4]/30 bg-[#3b9fd4]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#3b9fd4]">
                Get in Touch
              </span>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white leading-tight md:text-4xl">
                Let&apos;s Start a<br />
                <span className="text-[#3b9fd4]">Partnership.</span>
              </h2>
              <p className="mb-12 leading-relaxed text-[#a8c8de]">
                We offer confidential diagnostic consultations for organizations ready to scale with integrity.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#106c9d]/20 text-[#3b9fd4]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#3b9fd4]/60">{item.label}</p>
                      <p className="font-medium text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="relative z-10 mt-16 text-xs font-medium text-[#3b9fd4]/30">
              © 2026 OrgClinic Consultancy. All rights reserved.
            </p>
          </div>

          {/* Right: form */}
          <div className="p-10 md:p-16 lg:w-[60%]">
            <h3 className="mb-8 text-xl font-bold text-[#002b47]">Send us a message</h3>
            <form className="flex flex-col gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="rounded-xl border border-[#dbeeff] bg-[#f0f8ff] px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-[#106c9d] focus:bg-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@organization.sb"
                    className="rounded-xl border border-[#dbeeff] bg-[#f0f8ff] px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-[#106c9d] focus:bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Organization</label>
                <input
                  type="text"
                  placeholder="Your Organization Name"
                  className="rounded-xl border border-[#dbeeff] bg-[#f0f8ff] px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-[#106c9d] focus:bg-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">How can we help?</label>
                <textarea
                  placeholder="Describe your organizational challenges..."
                  rows={4}
                  className="resize-none rounded-xl border border-[#dbeeff] bg-[#f0f8ff] px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-[#106c9d] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center justify-center gap-3 rounded-xl bg-[#004771] py-4 font-bold text-white shadow-lg shadow-[#004771]/20 transition-all hover:bg-[#106c9d] hover:-translate-y-0.5 active:scale-95"
              >
                Send Advisory Request
                <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
