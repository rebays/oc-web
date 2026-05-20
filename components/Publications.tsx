import { FileText, Download } from "lucide-react";

const publications = [
  {
    category: "Institutional Report",
    title: "State of Organisational Health in Solomon Islands 2024",
    description: "An annual diagnostic overview of the governance and operational health of key public and civil society institutions across Solomon Islands.",
    date: "March 2024",
  },
  {
    category: "Policy Brief",
    title: "Decentralisation and Service Delivery: Lessons from the Provinces",
    description: "Examining how devolved governance structures have affected frontline service delivery in health, education, and infrastructure.",
    date: "November 2023",
  },
  {
    category: "Research Paper",
    title: "Workforce Readiness in the Pacific Public Sector",
    description: "A comparative study of skills gaps and training needs across Pacific Island public service institutions, with targeted recommendations for Solomon Islands.",
    date: "July 2023",
  },
  {
    category: "Evaluation Report",
    title: "EFAT Capacity Assessment: Findings and Roadmap",
    description: "A comprehensive evaluation of EFAT's organisational capacity, identifying priority areas for strengthening financial administration and accountability.",
    date: "February 2023",
  },
];

function Publications() {
  return (
    <section id="publications" className="bg-white px-6 py-28 md:px-12">
      <div className="mx-auto max-w-5xl">

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#002b47]">
            Publications & Reports
          </h2>
        </div>

        <div className="mb-12 flex flex-col gap-3">
          {publications.map((pub, i) => (
            <div
              key={i}
              className="group flex items-center gap-6 rounded-2xl border border-[#dbeeff] bg-[#f0f8ff] px-7 py-5 transition-all hover:border-[#106c9d]/40 hover:shadow-lg hover:shadow-[#004771]/6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#106c9d] shadow-sm transition-colors group-hover:bg-[#106c9d] group-hover:text-white">
                <FileText size={18} />
              </div>
              <div className="flex flex-1 flex-col gap-1 min-w-0">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#dbeeff] px-3 py-0.5 text-xs font-bold text-[#004771]">
                    {pub.category}
                  </span>
                  <span className="text-xs text-zinc-400">{pub.date}</span>
                </div>
                <h3 className="font-extrabold leading-snug text-[#002b47]">{pub.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">{pub.description}</p>
              </div>
              <button
                type="button"
                className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-[#106c9d] px-4 py-1.5 text-xs font-bold text-[#106c9d] transition-all hover:bg-[#106c9d] hover:text-white"
              >
                <Download size={13} /> Download
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-[#106c9d] px-8 py-4 font-bold text-white shadow-lg shadow-[#106c9d]/30 transition-all hover:bg-[#004771] hover:-translate-y-0.5 active:scale-95"
          >
            View All Publications
          </a>
        </div>

      </div>
    </section>
  );
}

export default Publications;
