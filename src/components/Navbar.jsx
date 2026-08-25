import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../projectpictures/transistion.logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Handle hash scrolling
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/85 backdrop-blur-md border-b border-zinc-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 text-zinc-900 hover:opacity-75 transition-opacity"
        >
          <img src={logoImg} alt="Parbin" className="h-8 w-auto object-contain" />
          <span className="font-semibold text-sm tracking-tight">
            Parbin Shrees
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/80 backdrop-blur-sm p-1 rounded-full border border-zinc-200/80">
          {navLinks.map((link) => {
            const active = isLinkActive(link);
            const classes = `text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-150 ${
              active 
                ? 'bg-white text-zinc-900 shadow-xs font-semibold' 
                : 'text-zinc-600 hover:text-zinc-950'
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
          <a
            href="mailto:parbinshreesh64487@gmail.com"
            className="text-xs font-medium text-zinc-900 bg-white hover:bg-zinc-50 border border-zinc-200 px-3.5 py-1.5 rounded-full shadow-xs hover:border-zinc-300 transition-all flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Get in touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-700 p-1.5 hover:bg-zinc-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-zinc-200 px-6 py-4 flex flex-col gap-1 shadow-lg">
          {navLinks.map((link) => {
            const active = isLinkActive(link);
            const classes = `text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
              active ? 'bg-zinc-100 text-zinc-950 font-semibold' : 'text-zinc-600 hover:bg-zinc-50'
            }`;

            if (link.isRoute) {
              return (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={classes}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
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
                  setIsMobileMenuOpen(false);
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
          <div className="pt-2 mt-2 border-t border-zinc-100">
            <a
              href="mailto:parbinshreesh64487@gmail.com"
              className="text-center block text-xs font-semibold bg-zinc-900 text-white py-2.5 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              parbinshreesh64487@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
