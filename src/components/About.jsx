import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 border-t border-[#1D3629]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="md:w-1/3">
            <h2 className="text-3xl font-mono font-bold text-[#EDE8DD] mb-2">About</h2>
            <div className="w-12 h-1 bg-[#C6903F] mb-6"></div>
          </div>
          
          <div className="md:w-2/3 space-y-6 text-lg leading-relaxed opacity-90">
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
