import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Splashscreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black text-white flex items-center justify-center overflow-hidden px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
          
          {/* Content container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative z-10 text-center"
          >
            {/* Logo or Title */}
            <motion.h1 
              className="font-bold tracking-wide mb-3 font-josefin"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
              initial={{ letterSpacing: '0.4em', opacity: 0 }}
              animate={{ letterSpacing: '0.2em', opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              LearnifyHub
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              className="opacity-70 mb-6 font-josefin"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Unlock Your Learning Potential
            </motion.p>
            
            {/* Loading Indicator */}
            <motion.div 
              className="bg-white/30 mx-auto overflow-hidden rounded-full"
              style={{ width: 'clamp(4rem, 10vw, 6rem)', height: '0.25rem' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "linear" }}
            >
              <motion.div 
                className="h-full bg-white"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Splashscreen;
