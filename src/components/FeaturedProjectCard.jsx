import React from 'react';
import duopongImg from '../projectpictures/duopong.jpeg';

const FeaturedProjectCard = ({ onOpenModal }) => {
  const duoPongData = {
    title: "DuoPong — Hardware Table Tennis Machine",
    category: "Arduino · Hardware · Embedded C/C++",
    description: "A physical two-player digital table tennis arcade machine built with Arduino. Features infrared sensors for point detection, an I2C LCD score screen, a PC monitor dashboard, and a motorized flap mechanism that automatically serves and bats the ball back across the table in real time.",
    fullDescription: "DuoPong is a custom hardware arcade build that turns Pong into a physical two-player table game. Powered by an Arduino microcontroller, the system uses an array of infrared beam sensors to detect ball crossing points, updates the score on an onboard 16x2 I2C LCD screen, sends live telemetry over serial to a connected laptop, and triggers a servo-driven flipper mechanism to return the ball.",
    features: [
      "Infrared beam-break sensor array for automatic point detection",
      "Microcontroller-driven servo flap mechanism to bat/return the ball",
      "I2C 16x2 LCD display for live on-table scorekeeping and buzzer alerts",
      "Serial communication pipeline to stream match telemetry to a laptop",
      "Custom physical chassis built with precision-mounted hardware components"
    ],
    tags: ['Arduino', 'C/C++', 'Sensors', 'Servos', 'I2C LCD', 'Hardware Prototyping'],
    repoUrl: "https://github.com/ParbinShrees/DUOPONG",
    demoUrl: "",
    imageUrl: duopongImg
  };

  return (
    <div className="bg-white border border-zinc-200/90 rounded-2xl overflow-hidden shadow-xs hover:border-zinc-300 transition-all duration-200">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Photo */}
        <div 
          className="lg:col-span-6 bg-zinc-100 min-h-[280px] lg:min-h-[360px] relative overflow-hidden border-b lg:border-b-0 lg:border-r border-zinc-200 cursor-pointer group"
          onClick={() => onOpenModal && onOpenModal(duoPongData)}
        >
          <img 
            src={duopongImg} 
            alt="DuoPong physical table tennis machine"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute top-4 left-4">
            <span className="text-[11px] font-mono font-semibold bg-zinc-900/80 text-white backdrop-blur-md px-2.5 py-1 rounded-md">
              Featured Build
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-6 p-7 lg:p-8 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
              <span>Arduino · Embedded Systems</span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-zinc-950 mb-3">
              DuoPong Arcade Machine
            </h3>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6">
              A physical two-player table tennis machine that brings digital Pong into the real world. Built with Arduino, infrared scoring sensors, a 16x2 I2C LCD screen, and an automated flap return mechanism that plays like a genuine arcade duel.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {['Arduino (C/C++)', 'IR Sensors', 'Servos', 'I2C LCD', 'Serial Telemetry'].map(tag => (
                <span key={tag} className="text-xs font-mono bg-zinc-100 text-zinc-700 px-2.5 py-1 rounded-md border border-zinc-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-100">
            <a 
              href="https://github.com/ParbinShrees/DUOPONG" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold bg-zinc-900 text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
            >
              <i className="fab fa-github" />
              GitHub Repository
            </a>

            <button 
              type="button"
              onClick={() => onOpenModal && onOpenModal(duoPongData)}
              className="text-xs font-semibold text-zinc-700 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Technical Specs
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default FeaturedProjectCard;
