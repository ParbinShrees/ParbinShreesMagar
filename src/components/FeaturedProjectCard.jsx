import React from 'react';

const FeaturedProjectCard = () => {
  return (
    <div className="bg-[#1D3629] border border-[#C6903F]/30 rounded-lg overflow-hidden flex flex-col lg:flex-row mb-12 shadow-xl group hover:border-[#C6903F] transition-colors relative">
      
      {/* Featured Tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-[#E8563A] text-[#EDE8DD] font-mono text-xs font-bold px-3 py-1 rounded shadow-md uppercase tracking-wider">
          Featured Build
        </span>
      </div>

      {/* Media Placeholder (Video/GIF for Hardware) */}
      <div className="lg:w-1/2 bg-[#15291F] min-h-[300px] flex items-center justify-center relative border-b lg:border-b-0 lg:border-r border-[#15291F] overflow-hidden">
        {/* We use an image tag so you can just drop your photo named 'duopong.jpg' into the public folder */}
        <img 
          src="/duopong.jpg" 
          alt="DuoPong Physical Hardware Build" 
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-60" style={{ display: 'none' }}>
          <svg className="w-12 h-12 mx-auto mb-2 text-[#C6903F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-mono text-sm px-4">Save your image as public/duopong.jpg to see it here!</span>
        </div>
      </div>

      {/* Content */}
      <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-bold font-mono text-[#EDE8DD] mb-2 mt-4 lg:mt-0">DuoPong</h3>
          <p className="font-mono text-sm text-[#C6903F] mb-6">Arduino · IoT · Embedded Systems</p>
          
          <p className="text-[#EDE8DD] opacity-90 leading-relaxed mb-6">
            A two-player digital table tennis machine that brings an arcade classic into the physical world. Built with Arduino and IoT components, it automatically detects and tracks points as they're scored — the live score displays on an I2C LCD mounted on the machine itself, and mirrors to a connected laptop — while a flap mechanism bats the ball back across the table in real time. A hardware build that plays like a real, competitive two-player game.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {['Arduino', 'C/C++', 'IoT', 'I2C LCD', 'Sensors', 'Embedded Systems', 'Hardware Design'].map(tag => (
              <span key={tag} className="font-mono text-xs bg-[#15291F] px-2 py-1 text-[#EDE8DD] opacity-80 rounded border border-[#2A4B3A]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <a 
            href="#" 
            className="font-mono text-sm font-bold bg-[#C6903F] text-[#15291F] px-5 py-2 hover:bg-[#b07d32] transition-colors rounded"
          >
            GitHub Repo
          </a>
          <a 
            href="#" 
            className="font-mono text-sm font-bold border border-[#C6903F] text-[#C6903F] px-5 py-2 hover:bg-[#C6903F]/10 transition-colors rounded"
          >
            More Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
