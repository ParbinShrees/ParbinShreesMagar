import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../projectpictures/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden pt-24 pb-16">
      {/* Subtle ambient lighting glows */}
      <div aria-hidden="true" className="absolute -right-40 top-12 h-96 w-96 rounded-full bg-[#0071e3]/[0.07] blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -left-40 bottom-12 h-96 w-96 rounded-full bg-[#34c759]/[0.05] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text & CTAs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Status + Location Badges */}
          <motion.div 
            className="flex flex-wrap items-center gap-2.5"
            initial={{ opacity: 0, y: 14 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.45 }}
          >
            <div className="flex items-center gap-2.5 bg-white shadow-sm px-3.5 py-1.5 rounded-full border border-[#d2d2d7]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34c759]"></span>
              </span>
              <span className="text-xs font-bold tracking-wide text-[#1d1d1f] uppercase">Available for work</span>
            </div>

            <div className="flex items-center gap-1.5 bg-white shadow-sm px-3.5 py-1.5 rounded-full border border-[#d2d2d7] text-xs font-semibold text-[#86868b]">
              <span>📍 Pokhara, Nepal</span>
            </div>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-[#1d1d1f]"
            initial={{ opacity: 0, y: 22 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Building software that <br className="hidden sm:block"/>
            <span className="text-[#0071e3] bg-gradient-to-r from-[#0071e3] to-[#0096fa] bg-clip-text text-transparent">
              controls hardware.
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-[#86868b] max-w-2xl leading-relaxed font-medium"
            initial={{ opacity: 0, y: 18 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            I'm <span className="text-[#1d1d1f] font-bold">Parbin Shrees Magar</span> — a Full-Stack Developer bridging modern web applications, scalable backend systems, and Arduino-powered physical devices.
          </motion.p>

          {/* Quick Tech Highlights */}
          <motion.div 
            className="flex flex-wrap gap-2 pt-1"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { label: 'React & Vite', icon: 'fab fa-react', color: '#61dafb' },
              { label: 'Java / Spring', icon: 'fab fa-java', color: '#f89820' },
              { label: 'Node.js', icon: 'fab fa-node-js', color: '#68a063' },
              { label: 'Arduino & IoT', icon: 'fas fa-microchip', color: '#0071e3' },
              { label: 'Tailwind CSS', icon: 'fas fa-wind', color: '#38bdf8' }
            ].map(tech => (
              <span 
                key={tech.label} 
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white px-3 py-1.5 rounded-full border border-[#d2d2d7] shadow-sm text-[#1d1d1f]"
              >
                <i className={`${tech.icon}`} style={{ color: tech.color }} />
                {tech.label}
              </span>
            ))}
          </motion.div>

          {/* Call to Actions & Social Links */}
          <motion.div 
            className="flex flex-wrap items-center gap-4 pt-4"
            initial={{ opacity: 0, y: 14 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.26 }}
          >
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#0071e3] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full hover:bg-[#0077ed] hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,113,227,0.3)] active:scale-95 transition-all duration-300 shadow-sm flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <i className="fas fa-arrow-down text-xs" />
            </a>
            
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-[#1d1d1f] font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full hover:bg-[#f5f5f7] hover:scale-105 hover:shadow-md active:scale-95 transition-all duration-300 border border-[#d2d2d7]"
            >
              Get in Touch
            </a>

            {/* Social quick icons */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href="https://github.com/ParbinShrees"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-[#d2d2d7] flex items-center justify-center text-[#1d1d1f] hover:text-[#0071e3] hover:scale-110 hover:shadow-sm transition-all"
                title="GitHub"
              >
                <i className="fab fa-github text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/parbin-shrees-6a32a2330/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-[#d2d2d7] flex items-center justify-center text-[#1d1d1f] hover:text-[#0071e3] hover:scale-110 hover:shadow-sm transition-all"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-lg" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Profile & Glassmorphism Showcase (5 cols) */}
        <motion.div 
          className="lg:col-span-5 w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.96, y: 20 }} 
          animate={{ opacity: 1, scale: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.14 }}
        >
          <div className="w-full max-w-[380px] sm:max-w-[400px] aspect-square relative group">
            {/* Background geometric accents */}
            <div aria-hidden="true" className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-[#0071e3]/20 via-transparent to-[#34c759]/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            <div aria-hidden="true" className="absolute inset-4 rounded-3xl border border-[#0071e3]/20 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
            
            {/* Profile Frame */}
            <div className="absolute inset-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.10)] rounded-3xl overflow-hidden z-10 flex items-center justify-center group-hover:scale-[1.02] group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] transition-all duration-500 border border-[#d2d2d7]">
              <img 
                src={profileImg} 
                alt="Parbin Shrees Magar" 
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity"
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

              {/* Floating Bottom Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-white/60 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#1d1d1f]">Parbin Shrees Magar</p>
                  <p className="text-[11px] font-medium text-[#86868b]">Full-Stack &amp; Hardware</p>
                </div>
                <span className="w-7 h-7 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center text-xs">
                  <i className="fas fa-code" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
