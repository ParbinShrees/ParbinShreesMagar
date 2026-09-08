import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import transitionLogo from '../projectpictures/transistion.logo.png';

const PageTransition = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-zinc-950 pointer-events-none will-change-transform"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: '-100%', opacity: 0 }}
        exit={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <img 
          src={transitionLogo} 
          alt="PSM Logo" 
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-sm" 
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
