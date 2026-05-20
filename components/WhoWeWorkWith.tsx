const orgs = [
  "WHO",
  "UNDP",
  "PMO",
  "Foreign Affairs",
  "EFAT",
  "ECAT",
  "RSIPF",
  "MERHD",
  "SPREP",
  "Electoral Commission",
];

const track = [...orgs, ...orgs];

function WhoWeWorkWith() {
  return (
    <section className="bg-white py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-[#002b47]">Who We Work With</h2>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex w-max gap-6"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {track.map((name, i) => (
            <div
              key={i}
              className="flex h-16 min-w-[180px] items-center justify-center rounded-2xl border border-[#dbeeff] bg-[#f0f8ff] px-8 text-sm font-bold text-[#004771] whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoWeWorkWith;
