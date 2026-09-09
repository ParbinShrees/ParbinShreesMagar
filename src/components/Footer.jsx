import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, targetId) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 pt-10 pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))] bg-white dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 text-xs">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="text-center sm:text-left">
          <p className="font-semibold text-zinc-900 dark:text-white mb-0.5">Parbin Shrees Magar</p>
          <p className="text-zinc-500 dark:text-zinc-400 font-mono">Full-Stack &amp; Embedded Systems</p>
          <p className="text-zinc-400 dark:text-zinc-500 font-mono mt-1">&copy; {currentYear} All rights reserved.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-5 font-medium text-zinc-600 dark:text-zinc-400">
          <Link to="/" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-zinc-950 dark:hover:text-white py-1 transition-colors">Home</Link>
          <Link to="/#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-zinc-950 dark:hover:text-white py-1 transition-colors">About</Link>
          <Link to="/#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-zinc-950 dark:hover:text-white py-1 transition-colors">Projects</Link>
          <Link to="/#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-zinc-950 dark:hover:text-white py-1 transition-colors">Skills</Link>
          <Link to="/#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-zinc-950 dark:hover:text-white py-1 transition-colors">Contact</Link>
          <Link to="/parbin" className="hover:text-zinc-950 dark:hover:text-white py-1 transition-colors">Behind the Code</Link>
        </div>

        <button
          onClick={scrollToTop}
          className="font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white px-3 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          ↑ Top
        </button>

      </div>
    </footer>
  );
};

export default Footer;
