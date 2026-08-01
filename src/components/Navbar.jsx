import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../projectpictures/logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      }, 100); // slight delay to allow rendering
    } else if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', isHash: true },
    { name: 'About', href: '#about', isHash: true },
    { name: 'Skills', href: '#skills', isHash: true },
    { name: 'Projects', href: '#projects', isHash: true },
    { name: 'Contact', href: '#contact', isHash: true },
    { name: 'Parbin', href: '/parbin', isRoute: true },
  ];

  const renderLink = (link, className, onClick) => {
    if (link.isRoute) {
      return (
        <Link 
          key={link.name} 
          to={link.href} 
          className={className}
          onClick={onClick}
        >
          {link.name}
        </Link>
      );
    }
    
    // Hash links
    const targetPath = isHome ? link.href : `/${link.href}`;
    return (
      <Link 
        key={link.name} 
        to={targetPath}
        className={className}
        onClick={(e) => {
          if (isHome) {
            e.preventDefault();
            const element = document.getElementById(link.href.replace('#', ''));
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1D3629]/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="hover:opacity-80 transition-opacity flex items-center">
          <img src={logoImg} alt="PSM Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => 
            renderLink(link, "text-[#EDE8DD] font-mono text-sm hover:text-[#C6903F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6903F] rounded")
          )}
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-[#EDE8DD] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6903F] rounded p-1"
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
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1D3629] border-t border-[#15291F] shadow-lg flex flex-col py-4 px-6 gap-4">
          {navLinks.map((link) => 
            renderLink(link, "text-[#EDE8DD] font-mono text-base hover:text-[#C6903F] transition-colors w-full", () => setIsMobileMenuOpen(false))
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
