import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../projectpictures/transistion.logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Handle hash scrolling after page load if navigating from another route
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

  // Scroll listener for sticky styling & active section scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      if (isHome) {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 180;

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
    { name: 'Home', href: '#home', id: 'home', isHash: true },
    { name: 'About', href: '#about', id: 'about', isHash: true },
    { name: 'Skills', href: '#skills', id: 'skills', isHash: true },
    { name: 'Projects', href: '#projects', id: 'projects', isHash: true },
    { name: 'Contact', href: '#contact', id: 'contact', isHash: true },
    { name: 'Behind the Code', href: '/parbin', isRoute: true },
  ];

  const isLinkActive = (link) => {
    if (link.isRoute) {
      return location.pathname === link.href;
    }
    return isHome && activeSection === link.id;
  };

  const renderLink = (link, baseClass, onClick) => {
    const active = isLinkActive(link);
    const classes = `${baseClass} ${active ? 'text-[#0071e3] font-bold bg-[#0071e3]/10 md:bg-transparent' : 'text-[#1d1d1f] hover:text-[#0071e3]'}`;

    if (link.isRoute) {
      return (
        <Link 
          key={link.name} 
          to={link.href} 
          className={classes}
          aria-current={active ? 'page' : undefined}
          onClick={onClick}
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
        aria-current={active ? 'page' : undefined}
        onClick={(e) => {
          if (isHome) {
            e.preventDefault();
            const element = document.getElementById(link.id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }
          if (onClick) onClick();
        }}
      >
        {link.name}
      </Link>
    );
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] py-3.5 border-b border-[#d2d2d7]/60' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link to="/" className="hover:opacity-85 hover:scale-105 transition-all duration-300 flex items-center gap-3">
          <img src={logoImg} alt="Parbin Shrees Magar Logo" className="h-9 w-auto object-contain" />
          <span className="font-bold text-sm tracking-tight text-[#1d1d1f] hidden sm:inline">
            Parbin<span className="text-[#0071e3]">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7 bg-white/70 backdrop-blur-md px-5 py-2 rounded-full border border-[#d2d2d7]/70 shadow-sm">
          {navLinks.map((link) => 
            renderLink(link, "font-semibold text-xs uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] rounded-full px-2.5 py-1")
          )}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:parbinshreesh64487@gmail.com"
            className="text-xs font-bold bg-[#0071e3] text-white px-4 py-2 rounded-full hover:bg-[#0077ed] hover:scale-105 active:scale-95 transition-all shadow-sm flex items-center gap-1.5"
          >
            <i className="fas fa-paper-plane text-[10px]" />
            Say Hello
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-[#1d1d1f] p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] rounded-xl hover:bg-black/5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
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

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-[#d2d2d7] shadow-xl flex flex-col py-5 px-6 gap-2 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => 
            renderLink(
              link, 
              "text-base font-semibold transition-colors w-full py-2.5 px-4 rounded-xl", 
              () => setIsMobileMenuOpen(false)
            )
          )}
          <div className="pt-3 border-t border-[#d2d2d7]/60 mt-2 flex flex-col gap-2">
            <a
              href="mailto:parbinshreesh64487@gmail.com"
              className="text-center font-bold text-sm bg-[#0071e3] text-white py-3 rounded-xl shadow-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
