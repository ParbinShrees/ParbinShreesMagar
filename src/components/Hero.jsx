import React from 'react';
import profileImg from '../projectpictures/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start text-left space-y-6">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8563A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E8563A]"></span>
            </span>
            <span className="font-mono text-sm tracking-wide text-[#EDE8DD] opacity-80 uppercase">Available for work</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Building software that <br className="hidden md:block"/>
            <span className="text-[#C6903F] font-mono italic">controls hardware.</span>
          </h1>
          
          <p className="text-lg md:text-xl opacity-80 max-w-xl leading-relaxed">
            I'm Parbin — a Full-Stack Developer bridging the gap between web applications and embedded systems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="bg-[#C6903F] text-[#15291F] font-mono font-bold px-6 py-3 hover:bg-[#b07d32] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EDE8DD] rounded"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="border border-[#C6903F] text-[#C6903F] font-mono font-bold px-6 py-3 hover:bg-[#C6903F]/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EDE8DD] rounded"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Profile Image / Hardware Showcase */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[380px] aspect-square relative">
            <div className="absolute inset-0 bg-[#1D3629] border-2 border-[#C6903F] rounded overflow-hidden z-10 flex items-center justify-center">
              <img 
                src={profileImg} 
                alt="Parbin Shrees Magar" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-60" style={{ display: 'none' }}>
                <svg className="w-16 h-16 mx-auto mb-4 text-[#C6903F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-mono text-sm px-8">Save your photo as public/profile.jpg to see it here!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
