import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const ParbinPage = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 max-w-6xl mx-auto px-6 space-y-24">
        
        {/* Header / Hero */}
        <header className="space-y-4">
          <span className="font-mono text-sm tracking-wide text-[#E8563A] uppercase">Behind the Code</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">My Story & Passions</h1>
          <p className="text-lg md:text-xl opacity-80 max-w-3xl leading-relaxed">
            A look into my creative background, physical setup configuration, and what inspires me outside of development.
          </p>
        </header>

        {/* Story & Workstation Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Bio Story */}
          <div className="bg-[#1D3629]/50 border border-[#15291F] rounded-lg p-8 space-y-6 opacity-90 leading-relaxed shadow-lg">
            <p>
              Hi, I'm <strong>Parbin Shrees Magar</strong>. I’m a Full-Stack Developer with a passion for both digital and physical engineering. My academic and professional life revolves around tech, but in my free time, I like to balance that logical mindset with my favorite hobbies.
            </p>
            <p>
              I’m a huge believer that your environment impacts your focus, so I’ve channeled my love for modern aesthetics into creating a clean and organized desk setup. Ultimately, whether I'm coding a web application, tinkering with an Arduino, or focusing on my studies, I thrive in spaces where clean design meets technology.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="bg-[#15291F] border border-[#C6903F]/30 text-[#EDE8DD] px-3 py-1 rounded text-sm font-mono flex items-center gap-2">
                <span className="text-[#C6903F]">#</span> Electronics
              </span>
              <span className="bg-[#15291F] border border-[#C6903F]/30 text-[#EDE8DD] px-3 py-1 rounded text-sm font-mono flex items-center gap-2">
                <span className="text-[#C6903F]">#</span> Workspace Setup
              </span>
              <span className="bg-[#15291F] border border-[#C6903F]/30 text-[#EDE8DD] px-3 py-1 rounded text-sm font-mono flex items-center gap-2">
                <span className="text-[#C6903F]">#</span> Web Development
              </span>
            </div>
          </div>

          {/* Setup Card */}
          <div className="bg-[#1D3629] border border-[#C6903F]/20 rounded-lg overflow-hidden shadow-xl">
            <div className="w-full h-48 bg-[#15291F] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-60">
                <svg className="w-12 h-12 text-[#C6903F] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-mono text-xs">Add workstation image to /src/projectpictures</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-mono font-bold text-[#C6903F] mb-6 border-b border-[#15291F] pb-4">Workstation Configuration</h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#15291F]/50">
                  <span className="font-mono text-sm opacity-70">Laptop/PC</span>
                  <span className="font-semibold text-right">Your PC Name</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#15291F]/50">
                  <span className="font-mono text-sm opacity-70">CPU / GPU</span>
                  <span className="font-semibold text-right">Your Specs</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#15291F]/50">
                  <span className="font-mono text-sm opacity-70">Memory</span>
                  <span className="font-semibold text-right">RAM / Storage</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                  <span className="font-mono text-sm opacity-70">Peripherals</span>
                  <span className="font-semibold text-right">Monitor | Keyboard | Mouse</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="space-y-12">
          <div className="border-b border-[#1D3629] pb-4">
            <span className="font-mono text-sm text-[#E8563A] uppercase">Gallery</span>
            <h2 className="text-3xl font-bold mt-2">Through My Lens</h2>
          </div>
          <div className="bg-[#1D3629]/30 h-64 border border-[#C6903F]/20 border-dashed rounded-lg flex items-center justify-center">
            <span className="font-mono opacity-60">Add gallery images here</span>
          </div>
        </section>

        {/* Interests Section */}
        <section id="interests" className="space-y-12">
          <div className="border-b border-[#1D3629] pb-4">
            <span className="font-mono text-sm text-[#E8563A] uppercase">Interests</span>
            <h2 className="text-3xl font-bold mt-2">Things I Collect, Create & Use</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Interest Card 1 */}
            <div className="bg-[#1D3629]/50 border border-[#15291F] p-6 rounded-lg hover:border-[#C6903F]/50 transition-colors group">
              <h3 className="text-xl font-bold mb-2">Hardware Hacks</h3>
              <p className="opacity-70 text-sm leading-relaxed mb-4">A collection of custom circuits and hardware setups outside of my main projects.</p>
              <button className="font-mono text-sm text-[#C6903F] group-hover:text-[#E8563A] transition-colors">View</button>
            </div>
            
            {/* Interest Card 2 */}
            <div className="bg-[#1D3629]/50 border border-[#15291F] p-6 rounded-lg hover:border-[#C6903F]/50 transition-colors group">
              <h3 className="text-xl font-bold mb-2">Workspace Gear</h3>
              <p className="opacity-70 text-sm leading-relaxed mb-4">A closer look at the peripherals and desk accessories I use for peak productivity.</p>
              <button className="font-mono text-sm text-[#C6903F] group-hover:text-[#E8563A] transition-colors">View</button>
            </div>

            {/* Interest Card 3 */}
            <div className="bg-[#1D3629]/50 border border-[#15291F] p-6 rounded-lg hover:border-[#C6903F]/50 transition-colors group">
              <h3 className="text-xl font-bold mb-2">Other Collections</h3>
              <p className="opacity-70 text-sm leading-relaxed mb-4">Other hobbies and physical items that inspire my sense of design.</p>
              <button className="font-mono text-sm text-[#C6903F] group-hover:text-[#E8563A] transition-colors">View</button>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default ParbinPage;
