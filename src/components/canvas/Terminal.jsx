import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Terminal = ({ onComplete, isMobile }) => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Different terminal lines for mobile vs desktop
  const desktopLines = [
    { text: "> Initializing 3D engine...", delay: 400 },
    { text: "> Loading Desktop...", delay: 600 },
    { text: "> Compiling shaders...20%", delay: 800 },
    { text: "> Loading textures...40%", delay: 1000 },
    { text: "> Processing 3D models...60%", delay: 1200 },
    { text: "> Setting up lighting & shadows...70%", delay: 1400 },
    { text: "> Rendering computer model...80%", delay: 1600 },
    { text: "> 3D Computer loaded successfully!...100%", delay: 1800 },
  ]

  const mobileLines = [
    { text: "> Loading mobile view...60%", delay: 400 },
    { text: "> Optimizing for your device...80%", delay: 800 },
    { text: "> Portfolio ready!", delay: 1200 },
    { text: "> Scroll down to explore my work", delay: 1600 },
  ];

  const terminalLines = isMobile ? mobileLines : desktopLines;

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, terminalLines[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, terminalLines[currentLine].delay);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      // Wait 2 seconds (2000ms) after completion before disappearing for both mobile and desktop
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  }, [currentLine, terminalLines, isComplete, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        ${isMobile
          ? 'w-full max-w-sm mx-auto mb-2.5' // Added 10px margin bottom (2.5 = 10px)
          : 'w-[320px] h-[240px] lg:w-[450px] lg:h-[240px]'
        }
        relative
        rounded-xl
        border-2 border-transparent
        bg-clip-padding
        shadow-2xl shadow-yellow-500/30
        overflow-hidden

        before:absolute
        before:inset-0
        before:rounded-xl
        before:bg-gradient-to-r
        before:from-yellow-400
        before:via-yellow-500
        before:to-yellow-600
        before:-z-10
        before:p-[2px]
      `}
    >
      {/* Terminal Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black px-3 py-1.5 border-b border-yellow-500/30 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        <span className="text-yellow-500 text-[10px] ml-2 font-mono">
          waseth.dev~
        </span>
      </div>

      {/* Terminal Content */}
      <div className="p-2.5 font-mono text-[10px] h-[calc(100%-32px)] overflow-y-auto terminal-scroll">
        <AnimatePresence>
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-1"
            >
              <span className="text-yellow-500">{line.text}</span>
              {index === lines.length - 1 && !isComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-2.5 bg-yellow-500 ml-1"
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 text-green-500 text-[10px]"
          >
            {isMobile ? '> System ready!' : '> System ready! Loading portfolio...'}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Terminal;