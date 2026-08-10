import React from 'react';
import { motion } from 'framer-motion';
import transitionLogo from '../projectpictures/transistion.logo.png';

const PageTransition = ({ children }) => {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-white pointer-events-none"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: '-100%', opacity: 0 }}
        exit={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={transitionLogo} alt="PSM Logo" className="w-24 h-24 object-contain" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
