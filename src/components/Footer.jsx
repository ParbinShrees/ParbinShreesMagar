import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7] py-14 text-center text-[#86868b]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        {/* Brand */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-extrabold text-xl tracking-tight text-[#1d1d1f]">
            Parbin Shrees Magar
          </span>
        </div>
        
        <p className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-6">
          Full-Stack Developer · Embedded Systems Enthusiast
        </p>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs font-semibold text-[#1d1d1f]">
          <Link to="/" className="hover:text-[#0071e3] transition-colors">Home</Link>
          <a href="/#about" className="hover:text-[#0071e3] transition-colors">About</a>
          <a href="/#skills" className="hover:text-[#0071e3] transition-colors">Skills</a>
          <a href="/#projects" className="hover:text-[#0071e3] transition-colors">Projects</a>
          <a href="/#contact" className="hover:text-[#0071e3] transition-colors">Contact</a>
          <Link to="/parbin" className="hover:text-[#0071e3] transition-colors">Behind the Code</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-8">
          <a 
            href="https://github.com/ParbinShrees" 
            className="w-10 h-10 rounded-full bg-white border border-[#d2d2d7] flex items-center justify-center text-[#1d1d1f] hover:text-[#0071e3] hover:scale-110 shadow-xs transition-all"
            target="_blank" 
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i className="fab fa-github text-base" />
          </a>
          <a 
            href="https://www.linkedin.com/in/parbin-shrees-6a32a2330/" 
            className="w-10 h-10 rounded-full bg-white border border-[#d2d2d7] flex items-center justify-center text-[#1d1d1f] hover:text-[#0071e3] hover:scale-110 shadow-xs transition-all"
            target="_blank" 
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in text-base" />
          </a>
          <a 
            href="mailto:parbinshreesh64487@gmail.com" 
            className="w-10 h-10 rounded-full bg-white border border-[#d2d2d7] flex items-center justify-center text-[#1d1d1f] hover:text-[#0071e3] hover:scale-110 shadow-xs transition-all"
            title="Email"
          >
            <i className="fas fa-envelope text-base" />
          </a>
        </div>

        {/* Bottom copyright + Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 border-t border-[#d2d2d7]/60 text-xs font-medium gap-4">
          <p className="text-[#86868b]">
            © {new Date().getFullYear()} Parbin Shrees Magar. Designed with care &amp; precision.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#1d1d1f] hover:text-[#0071e3] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <i className="fas fa-arrow-up text-[10px]" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
