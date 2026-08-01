import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const ParbinPage = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 max-w-6xl mx-auto px-6 space-y-32">
        
        {/* Header / Hero */}
        <header className="space-y-4">
          <span className="text-sm font-semibold tracking-wide text-[#86868b] uppercase">Behind the Code</span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-[#1d1d1f]">My Story & Passions</h1>
          <p className="text-xl md:text-2xl text-[#86868b] max-w-3xl leading-relaxed font-medium">
            A look into my creative background, physical setup configuration, and what inspires me outside of development.
          </p>
        </header>

        {/* Story & Workstation Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Bio Story */}
          <div className="bg-white border border-[#d2d2d7] rounded-3xl p-10 space-y-6 leading-relaxed shadow-sm text-[#1d1d1f] text-lg font-medium">
            <p>
              Hi, I'm <strong>Parbin Shrees Magar</strong>. I’m a Full-Stack Developer with a passion for both digital and physical engineering. My academic and professional life revolves around tech, but in my free time, I like to balance that logical mindset with my favorite hobbies.
            </p>
            <p>
              I’m a huge believer that your environment impacts your focus, so I’ve channeled my love for modern aesthetics into creating a clean and organized desk setup. Ultimately, whether I'm coding a web application, tinkering with an Arduino, or focusing on my studies, I thrive in spaces where clean design meets technology.
            </p>
            <div className="flex flex-wrap gap-3 pt-6">
              <span className="bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <span className="text-[#0071e3]">#</span> Electronics
              </span>
              <span className="bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <span className="text-[#0071e3]">#</span> Workspace Setup
              </span>
              <span className="bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <span className="text-[#0071e3]">#</span> Web Development
              </span>
            </div>
          </div>

          {/* Setup Card */}
          <div className="bg-white border border-[#d2d2d7] rounded-3xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 group">
            <div className="w-full h-48 bg-[#f5f5f7] flex items-center justify-center relative border-b border-[#d2d2d7] overflow-hidden group-hover:bg-[#ebebed] transition-colors duration-300">
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-60 group-hover:scale-105 transition-all duration-500">
                <svg className="w-12 h-12 text-[#86868b] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs font-semibold text-[#86868b]">Add workstation image to /src/projectpictures</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-6 border-b border-[#d2d2d7] pb-4 tracking-tight">Workstation Configuration</h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-[#d2d2d7]">
                  <span className="text-sm font-semibold text-[#86868b]">Laptop/PC</span>
                  <span className="font-bold text-right text-[#1d1d1f]">Acer Predator Helios Neo 16</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-[#d2d2d7]">
                  <span className="text-sm font-semibold text-[#86868b]">CPU / GPU</span>
                  <span className="font-bold text-right text-[#1d1d1f]">Intel Core i5 13th Gen / NVIDIA RTX 4060</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-[#d2d2d7]">
                  <span className="text-sm font-semibold text-[#86868b]">Memory</span>
                  <span className="font-bold text-right text-[#1d1d1f]">16GB DDR5 RAM / 1TB NVMe SSD</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-2">
                  <span className="text-sm font-semibold text-[#86868b]">Peripherals</span>
                  <span className="font-bold text-right text-[#1d1d1f]">Built-in 165Hz IPS Display</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="space-y-12">
          <div className="border-b border-[#d2d2d7] pb-6">
            <span className="text-sm font-semibold text-[#86868b] uppercase">Gallery</span>
            <h2 className="text-4xl font-bold mt-2 text-[#1d1d1f] tracking-tight">Through My Lens</h2>
          </div>
          <div className="bg-[#f5f5f7] min-h-64 border-2 border-[#d2d2d7] border-dashed rounded-3xl flex flex-col items-center justify-center gap-3 p-8">
            <svg className="w-10 h-10 text-[#86868b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <p className="font-semibold text-[#86868b] text-center">Drop your photos into <code className="bg-white border border-[#d2d2d7] px-2 py-0.5 rounded text-sm">/src/projectpictures</code> and update this section to display them.</p>
          </div>
        </section>

        {/* Interests Section */}
        <section id="interests" className="space-y-12">
          <div className="border-b border-[#d2d2d7] pb-6">
            <span className="text-sm font-semibold text-[#86868b] uppercase">Interests</span>
            <h2 className="text-4xl font-bold mt-2 text-[#1d1d1f] tracking-tight">Things I Collect, Create & Use</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Interest Card 1 */}
            <div className="bg-white border border-[#d2d2d7] p-8 rounded-3xl shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 group cursor-pointer">
              <h3 className="text-xl font-bold mb-3 text-[#1d1d1f]">Hardware Hacks</h3>
              <p className="text-[#86868b] font-medium text-base leading-relaxed mb-6">A collection of custom circuits and hardware setups outside of my main projects.</p>
              <button className="text-sm font-bold text-[#0071e3] group-hover:text-[#0077ed] transition-colors flex items-center gap-1">View</button>
            </div>
            
            {/* Interest Card 2 */}
            <div className="bg-white border border-[#d2d2d7] p-8 rounded-3xl shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 group cursor-pointer">
              <h3 className="text-xl font-bold mb-3 text-[#1d1d1f]">Workspace Gear</h3>
              <p className="text-[#86868b] font-medium text-base leading-relaxed mb-6">A closer look at the peripherals and desk accessories I use for peak productivity.</p>
              <button className="text-sm font-bold text-[#0071e3] group-hover:text-[#0077ed] transition-colors flex items-center gap-1">View</button>
            </div>

            {/* Interest Card 3 */}
            <div className="bg-white border border-[#d2d2d7] p-8 rounded-3xl shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 group cursor-pointer">
              <h3 className="text-xl font-bold mb-3 text-[#1d1d1f]">Other Collections</h3>
              <p className="text-[#86868b] font-medium text-base leading-relaxed mb-6">Other hobbies and physical items that inspire my sense of design.</p>
              <button className="text-sm font-bold text-[#0071e3] group-hover:text-[#0077ed] transition-colors flex items-center gap-1">View</button>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default ParbinPage;
