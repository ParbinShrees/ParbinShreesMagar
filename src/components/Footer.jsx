import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200/80 py-12 bg-white text-zinc-500 text-xs">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div>
          <p className="font-semibold text-zinc-900 mb-0.5">Parbin Shrees Magar</p>
          <p className="text-zinc-500 font-mono">Full-Stack &amp; Embedded Systems</p>
        </div>

        <div className="flex flex-wrap items-center gap-5 font-medium text-zinc-600">
          <Link to="/" className="hover:text-zinc-950 transition-colors">Home</Link>
          <a href="/#about" className="hover:text-zinc-950 transition-colors">About</a>
          <a href="/#projects" className="hover:text-zinc-950 transition-colors">Projects</a>
          <a href="/#skills" className="hover:text-zinc-950 transition-colors">Skills</a>
          <a href="/#contact" className="hover:text-zinc-950 transition-colors">Contact</a>
          <Link to="/parbin" className="hover:text-zinc-950 transition-colors">Behind the Code</Link>
        </div>

        <button
          onClick={scrollToTop}
          className="font-mono text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer"
        >
          ↑ Top
        </button>

      </div>
    </footer>
  );
};

export default Footer;
