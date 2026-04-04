import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`
      w-full flex items-center py-4 px-4 sm:px-10 fixed top-0 z-20
      transition-all duration-500 ease-out
      ${scrolled
        ? 'bg-primary/80 backdrop-blur-xl border-b border-yellow-500/20 shadow-lg shadow-yellow-500/5'
        : 'bg-transparent'
      }
    `}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          <div className="relative">
            {/* Glowing ring around logo */}
            <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-md group-hover:bg-yellow-500/40 transition-all duration-300"></div>
            <img
              src={logo}
              alt="logo"
              className='w-9 h-9 object-contain rounded-xl relative z-10 transition-transform duration-300 group-hover:scale-105'
            />
          </div>
          <p className='text-white text-[18px] font-bold cursor-pointer flex items-center gap-1'>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
              Waseth
            </span>
            <span className='sm:block hidden text-gray-400 text-sm font-normal'>| Software Developer</span>
          </p>
        </Link>

        {/* Desktop Navigation - Glassmorphism */}
        <ul className='list-none hidden sm:flex flex-row gap-1'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
                relative px-4 py-2 rounded-full
                transition-all duration-300 ease-out
                cursor-pointer overflow-hidden
                ${active === link.title
                  ? 'text-yellow-500'
                  : 'text-secondary hover:text-white'
                }
              `}
              onClick={() => setActive(link.title)}
            >
              {/* Glass background on hover */}
              <motion.div
                className="absolute inset-0 bg-yellow-500/10 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />

              {/* Active indicator */}
              {active === link.title && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-400/10 rounded-full border border-yellow-500/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              <a
                href={`#${link.id}`}
                className="relative z-10 text-[16px] font-medium transition-colors duration-200"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button - Glassmorphism */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <button
            onClick={() => setToggle(!toggle)}
            className='relative w-10 h-10 flex flex-col justify-center items-center gap-[6px] cursor-pointer rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300'
            aria-label="Toggle menu"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-yellow-500/0 transition-all duration-300 group-hover:bg-yellow-500/5"></div>

            <motion.span
              animate={{ rotate: toggle ? 45 : 0, y: toggle ? 7 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="block w-5 h-[2px] bg-white rounded-full transition-colors duration-300"
            />
            <motion.span
              animate={{ opacity: toggle ? 0 : 1, scaleX: toggle ? 0 : 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="block w-5 h-[2px] bg-white rounded-full transition-colors duration-300"
            />
            <motion.span
              animate={{ rotate: toggle ? -45 : 0, y: toggle ? -7 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="block w-5 h-[2px] bg-white rounded-full transition-colors duration-300"
            />
          </button>

          {/* Mobile Menu - Enhanced Glassmorphism */}
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className='absolute top-20 right-4 mx-0 my-0 min-w-[220px] z-10 rounded-2xl overflow-hidden'
                style={{
                  background: 'rgba(5, 8, 22, 0.85)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(250, 204, 21, 0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(250, 204, 21, 0.1), 0 4px 20px rgba(250, 204, 21, 0.1)'
                }}
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 opacity-50"></div>

                <ul className='list-none flex flex-col p-4 gap-2 relative z-10'>
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className={`relative overflow-hidden rounded-xl
                        ${active === link.title
                          ? 'text-yellow-500 bg-gradient-to-r from-yellow-500/20 to-yellow-500/5'
                          : 'text-secondary'
                        }
                        font-medium cursor-pointer text-[15px]
                        transition-all duration-300
                      `}
                      onClick={() => { setToggle(false); setActive(link.title); }}
                    >
                      {/* Hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-yellow-500/10"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />

                      <a href={`#${link.id}`} className="block w-full px-4 py-3 relative z-10">
                        <div className="flex items-center gap-3">
                          <div className={`w-1 h-1 rounded-full transition-all duration-300 ${active === link.title ? 'bg-yellow-500 w-2' : 'bg-gray-500'}`}></div>
                          {link.title}
                        </div>
                      </a>
                    </motion.li>
                  ))}

                  {/* Additional divider with glass effect */}
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent my-1"></div>

                  {/* Contact info in mobile menu */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="px-4 py-2 text-xs text-gray-400"
                  >
                    <p className="font-mono">waseth@developer:~$</p>
                  </motion.div>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;