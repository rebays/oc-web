"use client";

import Image from "next/image";
import { useState } from "react";
import { Link2, Mail } from "lucide-react";

function Team() {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (name: string) => {
    setFailedImages(prev => new Set(prev).add(name));
  };

  const getInitials = (name: string) =>
    name.split(" ").map(n => n[0]).slice(0, 2).join("");
  const team = [
  {
    name: "Karl Saliga",
    role: "Lead Consultant & Founder",
    bio: "With over 20 years in organizational development across the Pacific, Karl specializes in institutional reform and diagnostic consultancy for high-impact organizations.",
    img: "/karl.jpg"
  },
  {
    name: "Dr. Jerry B. Siota",
    role: "Senior Strategy Advisor",
    bio: "A specialist in strategic planning and project management, Dr. Siota drives structural results for both public sector institutions and private enterprises.",
    img: "/jerry.jpg"
  },
  {
    name: "Liam Sau",
    role: "Project Operations Manager", 
    bio: "Liam oversees complex project delivery and operational workflows, ensuring that organizational diagnostics translate into actionable, sustainable results.",
    img: "/liam.jpg" // Updated to unique image path
  },
  {
    name: "Dr. Derek Mane",
    role: "Capacity Building Specialist",
    bio: "Dr. Mane designs and delivers high-level training frameworks, fostering leadership and technical skill growth within the Solomon Islands' workforce.",
    img: "/dmane.jpg"
  }
];  

  return (
    <section id="team" className="bg-white px-6 py-24 dark:bg-zinc-950 md:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#106c9d]" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#106c9d]">Leadership</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
            Meet Our <span className="text-[#004771]">Strategic Advisors</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Our team bridges international best practices with deep cultural fluency to provide 
            unparalleled guidance in the Solomon Islands.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <div key={i} className="group relative">
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                {failedImages.has(member.name) ? (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#004771]/10 to-[#106c9d]/10">
                    <span className="text-5xl font-black text-[#004771]/40 dark:text-[#106c9d]/60 select-none">
                      {getInitials(member.name)}
                    </span>
                  </div>
                ) : (
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    priority={i === 0}
                    onError={() => handleImageError(member.name)}
                  />
                )}
                
                {/* Overlay with Socials on Hover */}
                <div className="absolute inset-0 flex items-end bg-linear-to-t from-[#004771]/90 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <button type="button" aria-label="View profile" className="rounded-full bg-white/20 p-2 text-white backdrop-blur-md hover:bg-[#106c9d] transition-colors">
                      <Link2 size={18} />
                    </button>
                    <button type="button" aria-label="Send email" className="rounded-full bg-white/20 p-2 text-white backdrop-blur-md hover:bg-[#106c9d] transition-colors">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Box */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {member.name}
                  </h3>
                  <div className="h-px flex-grow mx-4 bg-zinc-100 dark:bg-zinc-800" />
                </div>
                <p className="mt-1 text-sm font-bold uppercase tracking-widest text-[#106c9d]">
                  {member.role}
                </p>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                  &quot;{member.bio}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;