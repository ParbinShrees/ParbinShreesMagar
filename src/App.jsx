import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ParbinPage from './pages/ParbinPage';

const ScrollToTopOnRoute = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);
  return null;
};

const FloatingScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-[#d2d2d7] text-[#1d1d1f] shadow-lg flex items-center justify-center hover:bg-[#0071e3] hover:text-white hover:border-[#0071e3] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer group"
      aria-label="Scroll to top"
    >
      <i className="fas fa-chevron-up text-xs group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/parbin" element={<ParbinPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnRoute />
      <div className="min-h-screen font-sans selection:bg-blue-600 selection:text-white relative bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <FloatingScrollTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
