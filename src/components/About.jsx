import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const highlights = [
    {
      icon: 'fa-layer-group',
      title: 'Full-Stack Web',
      desc: 'Developing fast, responsive interfaces in React paired with resilient backend services in Java, Spring Boot, and Node.js.',
      color: '#0071e3'
    },
    {
      icon: 'fa-microchip',
      title: 'Hardware & IoT',
      desc: 'Prototyping custom physical devices with Arduino, sensors, and actuators that connect digital logic with the tangible world.',
      color: '#34c759'
    },
    {
      icon: 'fa-code-branch',
      title: 'Clean Architecture',
      desc: 'Emphasizing modularity, normalized databases (MySQL, PostgreSQL), and robust REST API design patterns.',
      color: '#ff9f0a'
    },
    {
      icon: 'fa-compass',
      title: 'Pokhara Base',
      desc: 'Crafting software from Nepal with an eye on global engineering standards, open-source builds, and performance.',
      color: '#af52de'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-bold text-[#0071e3] uppercase tracking-widest block mb-2">
            Background &amp; Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight">
            About Parbin
          </h2>
          <div className="w-16 h-1.5 bg-[#0071e3] rounded-full mt-3"></div>
        </div>

        {/* Story & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-lg sm:text-xl leading-relaxed text-[#1d1d1f] font-medium">
            <p className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight leading-snug">
              "I build across the stack with <span className="text-[#0071e3]">Java, React, and Node.js</span> — then take it further by wiring systems into physical hardware."
            </p>
            
            <p className="text-[#86868b] text-base sm:text-lg">
              My favorite work lives at the intersection where code commands physical motion and feedback. I believe software shouldn't just remain trapped behind glass screens; it should interact with the environment through sensors, responsive actuators, and real-time telemetry.
            </p>

            <p className="text-[#86868b] text-base sm:text-lg">
              Whether architecting a multi-module enterprise backend with payment handling or fabricating an arcade table tennis build like <strong className="text-[#1d1d1f]">DuoPong</strong>, I focus on system reliability, clean UI aesthetics, and frictionless communication between hardware and software.
            </p>

            {/* Teaser link to /parbin */}
            <div className="pt-4">
              <Link
                to="/parbin"
                className="inline-flex items-center gap-3 bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f] font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl border border-[#d2d2d7] transition-all duration-300 hover:scale-[1.02] shadow-sm group"
              >
                <span>Read My Story, Workstation Setup &amp; Photography</span>
                <i className="fas fa-arrow-right text-[#0071e3] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 4 Feature Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item) => (
              <div 
                key={item.title}
                className="bg-[#f5f5f7] border border-[#d2d2d7] p-5 rounded-2xl flex items-start gap-4 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold shadow-sm"
                  style={{ backgroundColor: item.color }}
                >
                  <i className={`fas ${item.icon} text-base`} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1d1d1f] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#86868b] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
