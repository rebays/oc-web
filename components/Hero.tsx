import { ChevronRight, Activity, Shield, Users } from 'lucide-react';
import Image from 'next/image';

function Hero() {
  return (
    <header className="relative min-h-screen overflow-hidden flex items-center">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          className="w-full h-full object-cover"
          src='/helping-hand.jpg'
          alt='helping-hand'
          fill
          priority // Added priority for LCP optimization
        />
        {/* Added a subtle overlay back in case the image makes text hard to read */}
        <div className="absolute inset-0 bg-white/40 dark:bg-zinc-950/40" />
      </div>

      <div className='max-w-7xl m-auto pt-32 w-full relative z-10'>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Content */}
            <div className="max-w-2xl">
              
              {/* Added font-serif here */}
              <h1 className="text-5xl capitalize md:text-6xl font-black font-serif text-zinc-900 dark:text-white leading-[1.1] mb-6">
                Better Health for <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#106c9d] to-[#004771]">
                  your organization.
                </span>
              </h1>

              <div className="flex flex-wrap gap-4">
                <button type="button" className="px-8 py-4 bg-[#106c9d] text-white font-bold rounded-lg shadow-lg shadow-[#106c9d]/20 hover:bg-[#004771] transition-all flex items-center group">
                  Discover more
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Element */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="p-6 bg-white/90 dark:bg-zinc-900/10 backdrop-blur-md rounded-2xl shadow-xl mt-8">
                  <Activity className="text-[#106c9d] mb-4" size={32} />
                  {/* Applied font-serif to sub-headings for consistency */}
                  <h3 className="font-bold font-serif text-zinc-900 dark:text-white">Diagnostics</h3>
                  <p className="text-sm text-zinc-500">Identifying core structural gaps.</p>
                </div>
                <div className="p-6 bg-white/90 dark:bg-zinc-900/10 backdrop-blur-md rounded-2xl shadow-xl ">
                  <Shield className="text-[#004771] mb-4" size={32} />
                  <h3 className="font-bold font-serif text-zinc-900 dark:text-white">Integrity</h3>
                  <p className="text-sm text-zinc-500">Building ethical frameworks.</p>
                </div>
                <div className="p-6 bg-white/90 dark:bg-zinc-900/10 backdrop-blur-md rounded-2xl shadow-xl col-span-2 flex items-center gap-6">
                  <div className="h-12 w-12 rounded-full bg-[#106c9d]/10 flex items-center justify-center shrink-0">
                    <Users className="text-[#106c9d]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold font-serif text-zinc-900 dark:text-white">Capacity Building</h3>
                    <p className="text-sm text-zinc-500">Empowering local teams for long-term impact.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;