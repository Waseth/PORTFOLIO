import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto overflow-hidden'>
      {/* Main container with grid layout for desktop */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8`}>

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
            I develop fullstack web applications with modern technologies
          </p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-5 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Right side - 3D Canvas */}
        <div className="flex-1 w-full h-[400px] lg:h-[500px] relative">
          <ComputersCanvas />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-10 left-0 right-0 w-full flex justify-center items-center z-10'>
        <a href="#about">
          <div className='w-[30px] h-[50px] rounded-3xl border-4 border-yellow-500 flex justify-center items-start p-2 hover:border-yellow-400 transition-colors duration-300'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-2 h-2 rounded-full bg-yellow-500 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;