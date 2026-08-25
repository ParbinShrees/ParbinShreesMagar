import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../projectpictures/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Status / Location Meta */}
            <motion.div 
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 bg-zinc-100 px-3 py-1 rounded-md border border-zinc-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Available for opportunities · Pokhara, Nepal</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              Full-stack developer building clean web software &amp; physical computing systems.
            </motion.h1>

            {/* Bio */}
            <motion.p 
              className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              I work across the web stack with <strong className="font-semibold text-zinc-900">React</strong>, <strong className="font-semibold text-zinc-900">Java (Spring Boot)</strong>, and <strong className="font-semibold text-zinc-900">Node.js</strong>, and build hardware-driven projects with <strong className="font-semibold text-zinc-900">Arduino</strong>.
            </motion.p>

            {/* Actions & Socials */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 pt-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-semibold bg-zinc-900 text-white px-5 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors shadow-xs"
              >
                View Selected Work
              </a>
              
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 px-5 py-2.5 rounded-lg transition-colors shadow-xs"
              >
                Contact Me
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/ParbinShrees"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 flex items-center justify-center transition-colors"
                  title="GitHub"
                >
                  <i className="fab fa-github text-sm" />
                </a>
                <a
                  href="https://www.linkedin.com/in/parbin-shrees-6a32a2330/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 flex items-center justify-center transition-colors"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-sm" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Portrait Image */}
          <motion.div 
            className="lg:col-span-4 flex justify-start lg:justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-48 sm:w-56 lg:w-64 aspect-square rounded-2xl overflow-hidden border border-zinc-200/80 bg-zinc-100 shadow-sm relative group">
              <img 
                src={profileImg} 
                alt="Parbin Shrees Magar" 
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
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
