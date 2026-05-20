"use client";

import { useEffect, useState } from "react";

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

const groups: string[][] = [];
for (let i = 0; i < orgs.length; i += 3) {
  groups.push(orgs.slice(i, i + 3));
}

function WhoWeWorkWith() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % groups.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-[#002b47]">Who We Work With</h2>
      </div>

      <div className="overflow-hidden px-6 md:px-12">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {groups.map((group, i) => (
            <div key={i} className="flex min-w-full justify-center gap-6">
              {group.map((name) => (
                <div
                  key={name}
                  className="flex h-20 min-w-[210px] items-center justify-center rounded-2xl border border-[#dbeeff] bg-[#f0f8ff] px-10 text-base font-bold text-[#004771] whitespace-nowrap"
                >
                  {name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="mt-8 flex justify-center gap-2">
        {groups.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to group ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-[#106c9d]" : "w-1.5 bg-[#dbeeff]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default WhoWeWorkWith;
