import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7] py-12 text-center text-[#86868b]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-2xl mb-6 text-[#1d1d1f] font-semibold">Parbin Shrees Magar</h2>
        <div className="flex gap-6 mb-8 text-sm text-[#1d1d1f]">
          <a 
            href="https://github.com/ParbinShrees" 
            className="hover:text-[#0071e3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] rounded px-2 py-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/parbin-shrees-6a32a2330/" 
            className="hover:text-[#0071e3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] rounded px-2 py-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:parbinshreesh64487@gmail.com" 
            className="hover:text-[#0071e3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] rounded px-2 py-1"
          >
            Email
          </a>
        </div>
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Parbin Shrees Magar. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
