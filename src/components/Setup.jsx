import React from 'react';

const Setup = () => {
  return (
    <section id="setup" className="py-20 border-t border-[#1D3629]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="md:w-1/3">
            <h2 className="text-3xl font-mono font-bold text-[#EDE8DD] mb-2">Parbin</h2>
            <div className="w-12 h-1 bg-[#C6903F] mb-6"></div>
          </div>
          
          <div className="md:w-2/3 w-full bg-[#1D3629]/50 border border-[#C6903F]/20 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-mono font-bold text-[#C6903F] mb-6 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Workstation Configuration
            </h3>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-[#15291F]">
                <span className="font-mono text-[#EDE8DD] opacity-70 mb-1 sm:mb-0">Laptop</span>
                <span className="text-[#EDE8DD] font-semibold">Your Laptop Name (e.g., MacBook Pro)</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-[#15291F]">
                <span className="font-mono text-[#EDE8DD] opacity-70 mb-1 sm:mb-0">Monitor</span>
                <span className="text-[#EDE8DD] font-semibold">Your Monitor (e.g., LG UltraGear 27")</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-[#15291F]">
                <span className="font-mono text-[#EDE8DD] opacity-70 mb-1 sm:mb-0">Keyboard</span>
                <span className="text-[#EDE8DD] font-semibold">Your Keyboard (e.g., Keychron K2)</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-[#15291F]">
                <span className="font-mono text-[#EDE8DD] opacity-70 mb-1 sm:mb-0">Mouse</span>
                <span className="text-[#EDE8DD] font-semibold">Your Mouse (e.g., Logitech MX Master 3)</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2">
                <span className="font-mono text-[#EDE8DD] opacity-70 mb-1 sm:mb-0">Other Accessories</span>
                <span className="text-[#EDE8DD] font-semibold">Headphones, Mic, Arduino kits, etc.</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Setup;
