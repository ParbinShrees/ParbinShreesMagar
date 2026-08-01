import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#15291F] border-t border-[#1D3629] py-12 text-center text-[#EDE8DD]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-2xl mb-6">Parbin Shrees Magar</h2>
        <div className="flex gap-6 mb-8 font-mono text-sm">
          <a 
            href="#" 
            className="hover:text-[#C6903F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6903F] rounded px-2 py-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a 
            href="#" 
            className="hover:text-[#C6903F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6903F] rounded px-2 py-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:parbinshreesh64487@gmail.com" 
            className="hover:text-[#C6903F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6903F] rounded px-2 py-1"
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
