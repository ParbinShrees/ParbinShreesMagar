import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-[#d2d2d7]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-2 tracking-tight">About</h2>
            <div className="w-16 h-1.5 bg-[#0071e3] mb-6 rounded-full"></div>
          </div>
          
          <div className="md:w-2/3 space-y-6 text-xl md:text-2xl leading-relaxed text-[#1d1d1f] font-medium">
            <p>
              "I'm Parbin — a developer who works across the stack with Java, React, and Node.js, and then takes it further by wiring projects into real hardware with Arduino."
            </p>
            <p>
              My favorite work lives at that intersection, where software controls something physical. I enjoy building systems that are not just confined to a browser or terminal, but interact with the real world through sensors, actuators, and custom circuitry.
            </p>
            <p>
              Whether it's a web application handling complex backend logic or a hardware build like DuoPong—a two-player digital table-tennis machine—I'm driven by the challenge of making different technologies communicate seamlessly.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
