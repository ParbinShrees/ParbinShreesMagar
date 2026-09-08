import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle hash scrolling with multi-attempt retry (for slow/budget devices)
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      let attempts = 0;
      const tryScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < 8) {
          attempts++;
          setTimeout(tryScroll, 75);
        }
      };
      tryScroll();
    } else if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location, isHome]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Scroll listener for sticky background & active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (isHome) {
        const sections = ['home', 'about', 'projects', 'skills', 'contact'];
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about', isHash: true },
    { name: 'Projects', href: '#projects', id: 'projects', isHash: true },
    { name: 'Skills', href: '#skills', id: 'skills', isHash: true },
    { name: 'Contact', href: '#contact', id: 'contact', isHash: true },
    { name: 'Behind the Code', href: '/parbin', isRoute: true },
  ];

  const isLinkActive = (link) => {
    if (link.isRoute) return location.pathname === link.href;
    return isHome && activeSection === link.id;
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 pt-[env(safe-area-inset-top,0px)] ${
        isScrolled 
          ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] py-3' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <Link 
          to="/" 
          className="flex items-center hover:opacity-75 transition-opacity"
          aria-label="Home page"
        >
          <img src="/logo.png" alt="PSM Logo" className="h-9 sm:h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-800/80 backdrop-blur-sm p-1 rounded-full border border-zinc-200/80 dark:border-zinc-700/80">
          {navLinks.map((link) => {
            const active = isLinkActive(link);
            const classes = `text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-150 ${
              active 
                ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 shadow-xs font-semibold' 
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50'
            }`;

            if (link.isRoute) {
              return (
                <Link key={link.name} to={link.href} className={classes}>
                  {link.name}
                </Link>
              );
            }

            const targetPath = isHome ? link.href : `/${link.href}`;
            return (
              <Link 
                key={link.name} 
                to={targetPath}
                className={classes}
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault();
                    const el = document.getElementById(link.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href="mailto:parbinshreesh64487@gmail.com"
            className="text-xs font-medium text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 px-3.5 py-1.5 rounded-full shadow-xs hover:border-zinc-300 dark:hover:border-zinc-600 transition-all flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Get in touch
          </a>
        </div>

        {/* Mobile Toggle & Actions */}
        <div className="md:hidden flex items-center gap-1.5">
          <button
            onClick={toggleTheme}
            className="w-11 h-11 flex items-center justify-center text-zinc-700 dark:text-zinc-300 active:bg-zinc-100 dark:active:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="w-11 h-11 flex items-center justify-center text-zinc-700 dark:text-zinc-300 active:bg-zinc-100 dark:active:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer & Backdrop */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-xs"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div 
            id="mobile-menu" 
            className="md:hidden relative z-50 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-5 py-4 flex flex-col gap-1.5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150"
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              const classes = `text-sm font-medium py-3 px-3 rounded-lg transition-colors flex items-center justify-between ${
                active 
                  ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white font-semibold' 
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100 active:bg-zinc-100 dark:active:bg-zinc-800'
              }`;

              if (link.isRoute) {
                return (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className={classes}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    <i className="fas fa-chevron-right text-xs opacity-40" />
                  </Link>
                );
              }

              const targetPath = isHome ? link.href : `/${link.href}`;
              return (
                <Link 
                  key={link.name} 
                  to={targetPath}
                  className={classes}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    if (isHome) {
                      e.preventDefault();
                      const el = document.getElementById(link.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>{link.name}</span>
                  <i className="fas fa-chevron-right text-xs opacity-40" />
                </Link>
              );
            })}
            <div className="pt-3 mt-1 border-t border-zinc-100 dark:border-zinc-800">
              <a
                href="mailto:parbinshreesh64487@gmail.com"
                className="text-center block text-xs font-semibold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 py-3 rounded-lg hover:bg-zinc-800 dark:hover:bg-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                parbinshreesh64487@gmail.com
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
