import React from 'react';

const FeaturedProjectCard = () => {
  return (
    <div className="bg-white border border-[#d2d2d7] rounded-3xl overflow-hidden flex flex-col lg:flex-row mb-12 shadow-[0_4px_24px_rgba(0,0,0,0.06)] group hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 relative">
      
      {/* Featured Tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-[#0071e3] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
          Featured Build
        </span>
      </div>

      {/* Media Placeholder (Video/GIF for Hardware) */}
      <div className="lg:w-1/2 bg-[#f5f5f7] min-h-[300px] flex items-center justify-center relative border-b lg:border-b-0 lg:border-r border-[#d2d2d7] overflow-hidden">
        {/* We use an image tag so you can just drop your photo named 'duopong.jpg' into the public folder */}
        <img 
          src="/duopong.jpg" 
          alt="DuoPong Physical Hardware Build" 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-60" style={{ display: 'none' }}>
          <svg className="w-12 h-12 mx-auto mb-2 text-[#86868b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm px-4 text-[#86868b]">Save your image as public/duopong.jpg to see it here!</span>
        </div>
      </div>

      {/* Content */}
      <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-between">
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold text-[#1d1d1f] mb-2 mt-4 lg:mt-0 tracking-tight">DuoPong</h3>
          <p className="text-sm font-semibold text-[#86868b] uppercase tracking-wide mb-6">Arduino · IoT · Embedded Systems</p>
          
          <p className="text-[#1d1d1f] leading-relaxed mb-6 font-medium text-lg">
            A two-player digital table tennis machine that brings an arcade classic into the physical world. Built with Arduino and IoT components, it automatically detects and tracks points as they're scored — the live score displays on an I2C LCD mounted on the machine itself, and mirrors to a connected laptop — while a flap mechanism bats the ball back across the table in real time. A hardware build that plays like a real, competitive two-player game.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {['Arduino', 'C/C++', 'IoT', 'I2C LCD', 'Sensors', 'Embedded Systems', 'Hardware Design'].map(tag => (
              <span key={tag} className="text-xs font-medium bg-[#f5f5f7] px-3 py-1.5 text-[#1d1d1f] rounded-full border border-[#d2d2d7]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <a 
            href="https://github.com/ParbinShrees" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-[#0071e3] text-white px-6 py-2.5 hover:bg-[#0077ed] hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,113,227,0.3)] active:scale-95 transition-all duration-300 rounded-full shadow-sm"
          >
            GitHub Repo
          </a>
          <a 
            href="#" 
            className="text-sm font-semibold border border-[#d2d2d7] text-[#1d1d1f] bg-transparent px-6 py-2.5 hover:bg-[#f5f5f7] hover:scale-105 hover:shadow-md active:scale-95 transition-all duration-300 rounded-full"
          >
            More Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
