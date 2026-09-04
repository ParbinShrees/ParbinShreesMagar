import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../projectpictures/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-24 sm:pt-28 md:pt-32 pb-14 md:pb-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-start lg:items-center">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6 w-full">
            
            {/* Status & Location Meta */}
            <motion.div 
              className="inline-flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-600 bg-zinc-100 px-3 py-1.5 rounded-md border border-zinc-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
              <span>Available for work · Pokhara, Nepal</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.2] sm:leading-[1.15]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              Full-stack developer building clean web software &amp; physical computing systems.
            </motion.h1>

            {/* Bio */}
            <motion.p 
              className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl font-normal"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              I work across the web stack with <strong className="font-semibold text-zinc-900">React</strong>, <strong className="font-semibold text-zinc-900">Java (Spring Boot)</strong>, and <strong className="font-semibold text-zinc-900">Node.js</strong>, and build hardware-driven projects with <strong className="font-semibold text-zinc-900">Arduino</strong>.
            </motion.p>

            {/* Action Buttons & Socials */}
            <motion.div 
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a 
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm font-semibold bg-zinc-900 text-white px-5 py-3 rounded-lg hover:bg-zinc-800 transition-colors shadow-xs text-center flex-1 sm:flex-initial"
                >
                  View Selected Work
                </a>
                
                <a 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 px-5 py-3 rounded-lg transition-colors shadow-xs text-center flex-1 sm:flex-initial"
                >
                  Contact Me
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-2 pt-1 sm:pt-0 sm:pl-2">
                <a
                  href="https://github.com/ParbinShrees"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 flex items-center justify-center transition-colors"
                  title="GitHub"
                  aria-label="GitHub Profile"
                >
                  <i className="fab fa-github text-base" />
                </a>
                <a
                  href="https://www.linkedin.com/in/parbin-shrees-6a32a2330/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 flex items-center justify-center transition-colors"
                  title="LinkedIn"
                  aria-label="LinkedIn Profile"
                >
                  <i className="fab fa-linkedin-in text-base" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Portrait Image */}
          <motion.div 
            className="lg:col-span-4 flex justify-start"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-60 lg:h-60 rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 shadow-sm relative group flex-shrink-0">
              <img 
                src={profileImg} 
                alt="Parbin Shrees Magar" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
