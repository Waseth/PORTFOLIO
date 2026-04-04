import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [mobileTerminalComplete, setMobileTerminalComplete] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handle3DLoaded = () => {
    setTimeout(() => {
      setShowScrollIndicator(true);
    }, 500);
  };

  const handleMobileTerminalComplete = () => {
    setMobileTerminalComplete(true);
    setTimeout(() => {
      setShowScrollIndicator(true);
    }, 300);
  };

  return (
    <section className='relative w-full min-h-screen mx-auto'>
      <div className={`${styles.paddingX} pt-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left z-10"
        >
          <h1 className="hero-title-geometric">
            <span className="hero-name-outline">EMMANUEL WASETH</span>
            <br />
            <span className="hero-builds-outline">BUILDS.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100 max-w-xl mx-auto lg:mx-0`}>
            I develop fullstack web applications
          </p>

          {(!isMobile || mobileTerminalComplete) && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-lg mt-16 lg:mt-6"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
          )}
        </motion.div>

        <div className="flex-1 w-full h-[400px] lg:h-[500px] relative">
          <ComputersCanvas
            on3DLoaded={handle3DLoaded}
            onMobileTerminalComplete={handleMobileTerminalComplete}
          />
        </div>
      </div>

      {/* Scroll indicator - positioned at bottom of hero section, follows natural flow */}
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className='
              relative
              left-0
              right-0
              w-full
              flex
              flex-col
              items-center
              justify-center
              gap-3
              bottom-2
              mt-6
              mb-6
              lg:bottom-10
              lg:mt-6
              lg:mb-8
              xl:bottom-28
              xl:mt-8
              xl:mb-10
            '
          >
            <a href="#about">
              <motion.div
                className='w-[30px] h-[50px] rounded-3xl border-4 border-yellow-500 flex justify-center items-start p-2 hover:border-yellow-400 transition-colors duration-300 cursor-pointer bg-black/20 backdrop-blur-sm'
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  y: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ y: [0, 24, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}
                  className="w-2 h-2 rounded-full bg-yellow-500 mb-1"
                />
              </motion.div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;