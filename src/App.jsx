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
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-4 sm:right-6 z-40 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 shadow-lg flex items-center justify-center hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 active:scale-95 transition-all duration-200 cursor-pointer group"
      aria-label="Scroll to top"
      title="Back to top"
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
