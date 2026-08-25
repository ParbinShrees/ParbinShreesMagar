import React from 'react';
import duopongImg from '../projectpictures/duopong.jpeg';

const FeaturedProjectCard = ({ onOpenModal }) => {
  const duoPongData = {
    title: "DuoPong",
    category: "Arduino · IoT · Embedded Systems",
    description: "A two-player digital table tennis machine that brings an arcade classic into the physical world. Built with Arduino and IoT components, it automatically detects and tracks points as they're scored — the live score displays on an I2C LCD mounted on the machine itself, and mirrors to a connected laptop — while a flap mechanism bats the ball back across the table in real time.",
    fullDescription: "DuoPong is a custom-engineered physical arcade gaming machine that brings Pong into physical reality. Built with Arduino microcontrollers, sensors, and servo actuators, it autonomously detects ball hits, registers points, and displays the real-time match state on a dual-screen configuration (an onboard I2C LCD panel for local spectators and an interactive serial dashboard for PC mirroring).",
    features: [
      "Infrared beam-break sensor array for autonomous point detection across table zones",
      "Microcontroller-controlled servo return flipper mechanism with dynamic velocity",
      "I2C 16x2 LCD display real-time scoring with sound buzzer notifications",
      "Serial communication pipeline to stream live telemetry & match stats to connected PC",
      "Custom laser-cut acrylic chassis and precision-mounted hardware components"
    ],
    tags: ['Arduino', 'C/C++', 'IoT', 'I2C LCD', 'Sensors', 'Actuators', 'Embedded Systems', 'Hardware Prototyping'],
    repoUrl: "https://github.com/ParbinShrees/DUOPONG",
    demoUrl: "",
    imageUrl: duopongImg
  };

  return (
    <div className="bg-white border border-[#d2d2d7] rounded-3xl overflow-hidden flex flex-col lg:flex-row mb-12 shadow-[0_4px_24px_rgba(0,0,0,0.06)] group hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 relative">
      
      {/* Featured Tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-[#0071e3] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          Featured Build
        </span>
      </div>

      {/* Media Box */}
      <div 
        className="lg:w-1/2 bg-[#f5f5f7] min-h-[300px] lg:min-h-[380px] flex items-center justify-center relative border-b lg:border-b-0 lg:border-r border-[#d2d2d7] overflow-hidden cursor-pointer"
        onClick={() => onOpenModal && onOpenModal(duoPongData)}
      >
        <img 
          src={duopongImg} 
          alt="DuoPong Physical Hardware Build" 
          className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span className="text-white text-xs font-semibold flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-full">
            <i className="fas fa-expand-alt" /> Click to view build specs
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#1d1d1f] tracking-tight">DuoPong</h3>
            <span className="text-xs font-bold text-[#0071e3] bg-[#0071e3]/10 px-3 py-1 rounded-full uppercase">
              Hardware + Code
            </span>
          </div>
          <p className="text-xs font-semibold text-[#86868b] uppercase tracking-wide mb-5">Arduino · IoT · Embedded Systems</p>
          
          <p className="text-[#1d1d1f] leading-relaxed mb-6 font-medium text-base sm:text-lg">
            A two-player digital table tennis machine that brings an arcade classic into the physical world. Built with Arduino and IoT components, it automatically detects points as they're scored — displaying real-time scores on an onboard I2C LCD and PC dashboard — while an automated flap mechanism bats the ball back across the table in real time.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {['Arduino (C/C++)', 'IoT', 'I2C LCD', 'Sensors', 'Actuators', 'Embedded Systems'].map(tag => (
              <span key={tag} className="text-xs font-semibold bg-[#f5f5f7] px-3 py-1.5 text-[#1d1d1f] rounded-full border border-[#d2d2d7]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a 
            href="https://github.com/ParbinShrees/DUOPONG" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold bg-[#0071e3] text-white px-6 py-2.5 hover:bg-[#0077ed] hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,113,227,0.3)] active:scale-95 transition-all duration-300 rounded-full shadow-sm"
          >
            <i className="fab fa-github" />
            GitHub Repo
          </a>
          <button 
            type="button"
            onClick={() => onOpenModal && onOpenModal(duoPongData)}
            className="flex items-center gap-2 text-sm font-semibold border border-[#d2d2d7] text-[#1d1d1f] bg-transparent px-6 py-2.5 hover:bg-[#f5f5f7] hover:scale-105 hover:shadow-md active:scale-95 transition-all duration-300 rounded-full cursor-pointer"
          >
            <i className="fas fa-info-circle text-[#0071e3]" />
            Architecture & Specs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
