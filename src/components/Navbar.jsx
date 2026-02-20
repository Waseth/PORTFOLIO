import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-5 px-4 sm:px-10 fixed top-0 z-20 bg-primary">
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain rounded-xl' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Waseth &nbsp;
            <span className='sm:block hidden'>| &nbsp;Software Developer</span>
          </p>
        </Link>

        
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>


        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <button
            onClick={() => setToggle(!toggle)}
            className='w-[28px] h-[28px] flex flex-col justify-center items-center gap-[5px] cursor-pointer'
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: toggle ? 45 : 0, y: toggle ? 7 : 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-[2px] bg-white rounded-full"
            />
            <motion.span
              animate={{ opacity: toggle ? 0 : 1, scaleX: toggle ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-[2px] bg-white rounded-full"
            />
            <motion.span
              animate={{ rotate: toggle ? -45 : 0, y: toggle ? -7 : 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-[2px] bg-white rounded-full"
            />
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className='absolute top-20 right-4 mx-0 my-0 min-w-[180px] z-10 rounded-2xl overflow-hidden'
                style={{
                  background: 'rgba(10, 10, 20, 0.85)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(145, 94, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(145,94,255,0.1)'
                }}
              >
                <ul className='list-none flex flex-col p-4 gap-1'>
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                      className={`${active === link.title ? "text-white bg-[#915eff]/20" : "text-secondary"}
                        font-medium cursor-pointer text-[15px] px-4 py-2.5 rounded-xl
                        hover:text-white hover:bg-[#915eff]/10 transition-all duration-200`}
                      onClick={() => { setToggle(false); setActive(link.title); }}
                    >
                      <a href={`#${link.id}`} className="block w-full">
                        {link.title}
                      </a>
                    </motion.li>
                  ))}
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