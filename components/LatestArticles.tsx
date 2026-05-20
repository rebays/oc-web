const articles = [
  {
    category: "Leadership",
    title: "Why Most Organisational Audits Fail to Drive Change",
    excerpt: "Diagnostics are only as useful as the will to act on them. We explore the common failure modes and what sets effective reform apart.",
    date: "12 May 2026",
    readTime: "5 min read",
  },
  {
    category: "Governance",
    title: "The Hidden Cost of Weak Internal Systems in Government Agencies",
    excerpt: "Poor documentation, unclear mandates, and siloed teams quietly erode public trust. Here's what it looks like — and how to fix it.",
    date: "28 Apr 2026",
    readTime: "7 min read",
  },
  {
    category: "Capacity Building",
    title: "Training Isn't Enough: Building Institutions That Learn",
    excerpt: "One-off workshops rarely stick. Sustainable capacity means embedding learning into the daily rhythm of how an organisation operates.",
    date: "10 Apr 2026",
    readTime: "4 min read",
  },
];

function LatestArticles() {
  return (
    <section id="articles" className="bg-[#f0f8ff] px-6 py-28 md:px-12">
      <div className="mx-auto max-w-5xl">

        <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-[#002b47] text-center">Latest Articles</h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {articles.map((article, i) => (
            <a
              key={i}
              href="#"
              className="group flex flex-col gap-4 rounded-2xl border border-[#dbeeff] bg-white p-7 transition-all hover:border-[#106c9d]/40 hover:shadow-lg hover:shadow-[#004771]/6"
            >
              <span className="self-start rounded-full bg-[#dbeeff] px-3 py-1 text-xs font-bold text-[#004771]">
                {article.category}
              </span>
              <h3 className="font-extrabold leading-snug text-[#002b47] transition-colors group-hover:text-[#106c9d]">
                {article.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-zinc-500">{article.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-[#106c9d] px-8 py-4 font-bold text-white shadow-lg shadow-[#106c9d]/30 transition-all hover:bg-[#004771] hover:-translate-y-0.5 active:scale-95"
          >
            View All Articles
          </a>
        </div>

      </div>
    </section>
  );
}

export default LatestArticles;
