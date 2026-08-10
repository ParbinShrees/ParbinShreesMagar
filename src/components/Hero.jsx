import React from 'react';
import profileImg from '../projectpictures/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start text-left space-y-6">
          <div className="flex items-center gap-3 bg-white shadow-sm px-4 py-2 rounded-full border border-[#d2d2d7]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#34c759]"></span>
            </span>
            <span className="text-sm font-medium tracking-wide text-[#1d1d1f] uppercase">Available for work</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[#1d1d1f]">
            Building software that <br className="hidden md:block"/>
            <span className="text-[#0071e3]">controls hardware.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#86868b] max-w-2xl leading-relaxed font-medium">
            I'm Parbin — a Full-Stack Developer bridging the gap between web applications and embedded systems.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#0071e3] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#0077ed] hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,113,227,0.3)] active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent text-[#1d1d1f] font-semibold px-8 py-4 rounded-full hover:bg-[#f5f5f7] hover:scale-105 hover:shadow-md active:scale-95 transition-all duration-300 border border-[#d2d2d7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Profile Image / Hardware Showcase */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[420px] aspect-square relative group">
            <div className="absolute inset-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl overflow-hidden z-10 flex items-center justify-center group-hover:scale-[1.03] group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.16)] transition-all duration-500">
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
                <svg className="w-16 h-16 mx-auto mb-4 text-[#86868b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-sm px-8 text-[#86868b]">Parbin Shrees Magar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
