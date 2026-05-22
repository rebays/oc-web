"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const orgs = [
  { name: "WHO", logo: "/logos/who.png" },
  { name: "UNDP", logo: "/logos/undp.png" },
  { name: "SIG", logo: "/logos/pmo.jpg" },
  { name: "EIF", logo: "/logos/eif.svg" },
  { name: "ACOM", logo: "/logos/acom.webp" },
  { name: "RSIPF", logo: "/logos/rsipf-logo.png" },
  { name: "SPREP", logo: "/logos/sprep.jpg" },
  { name: "Electoral Commission", logo: "/logos/siec.png" },
];

const SLIDE_H = 100;
const PER_SLIDE = 4;

const groups = Array.from(
  { length: Math.ceil(orgs.length / PER_SLIDE) },
  (_, i) => orgs.slice(i * PER_SLIDE, (i + 1) * PER_SLIDE)
);

export default function WhoWeWorkWith() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % groups.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="mb-24 text-center">
        <h2 className="text-3xl font-extrabold text-[#002b47]">Who We Work With</h2>
      </div>

      <div
        className="relative mx-auto max-w-3xl"
        style={{ height: SLIDE_H, overflow: "hidden" }}
      >
        {groups.map((group, i) => (
          <div
            key={i}
            className="absolute left-0 top-0 flex w-full items-center justify-around transition-transform duration-700 ease-in-out"
            style={{
              height: SLIDE_H,
              transform: `translateY(${(i - current) * SLIDE_H}px)`,
            }}
          >
            {group.map(({ name, logo }) => (
              <div key={name} style={{ width: 120, height: 52 }} className="flex items-center justify-center">
                <Image src={logo} alt={name} width={120} height={52} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
