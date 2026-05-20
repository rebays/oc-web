"use client";

import Image from "next/image";
import { useState } from "react";
import { Link2, Mail } from "lucide-react";

const team = [
  {
    name: "Karl Saliga",
    role: "Lead Consultant & Founder",
    bio: "With over 20 years in organizational development across the Pacific, Karl specializes in institutional reform and diagnostic consultancy for high-impact organizations.",
    img: "/karl.jpg",
  },
  {
    name: "Dr. Jerry B. Siota",
    role: "Senior Strategy Advisor",
    bio: "A specialist in strategic planning and project management, Dr. Siota drives structural results for both public sector institutions and private enterprises.",
    img: "/jerry.jpg",
  },
  {
    name: "Liam Sau",
    role: "Project Operations Manager",
    bio: "Liam oversees complex project delivery and operational workflows, ensuring that organizational diagnostics translate into actionable, sustainable results.",
    img: "/liam.jpg",
  },
  {
    name: "Dr. Derek Mane",
    role: "Capacity Building Specialist",
    bio: "Dr. Mane designs and delivers high-level training frameworks, fostering leadership and technical skill growth within the Solomon Islands' workforce.",
    img: "/dmane.jpg",
  },
];

function Team() {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (name: string) =>
    setFailedImages(prev => new Set(prev).add(name));

  const getInitials = (name: string) =>
    name.split(" ").map(n => n[0]).slice(0, 2).join("");

  return (
    <section id="team" className="bg-[#f0f8ff] px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#106c9d]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#106c9d]">Leadership</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-[#002b47] md:text-5xl">
            Meet Our <span className="text-[#106c9d]">Strategic Advisors.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-zinc-500">
            Our team bridges international best practices with deep cultural fluency to provide unparalleled guidance in the Solomon Islands.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <div key={i} className="group">

              {/* Photo */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#dbeeff]">
                {failedImages.has(member.name) ? (
                  <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#004771] to-[#106c9d]">
                    <span className="select-none text-5xl font-black text-white/30">
                      {getInitials(member.name)}
                    </span>
                  </div>
                ) : (
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    priority={i === 0}
                    onError={() => handleImageError(member.name)}
                  />
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end bg-linear-to-t from-[#002b47]/90 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      aria-label="View profile"
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-[#106c9d]"
                    >
                      <Link2 size={14} />
                    </button>
                    <button
                      type="button"
                      aria-label="Send email"
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-[#106c9d]"
                    >
                      <Mail size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="mt-5">
                <h3 className="font-bold text-[#002b47]">{member.name}</h3>
                <p className="mt-0.5 text-xs font-bold uppercase tracking-widest text-[#106c9d]">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
