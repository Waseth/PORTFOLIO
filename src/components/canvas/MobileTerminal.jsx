import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Command, Cpu, Zap, Code } from 'lucide-react';

const MobileTerminal = () => {
  const [typedText, setTypedText] = useState('');
  const [commandIndex, setCommandIndex] = useState(0);

  const commands = [
    { cmd: "> npm run dev", output: "Starting development server..." },
    { cmd: "> whoami", output: "Emmanuel Waseth - Fullstack Developer" },
    { cmd: "> skills --list", output: "React • Python • Flask • Tailwind • MySQL" },
    { cmd: "> projects --active", output: " 2+ production apps deployed" },
  ];

  useEffect(() => {
    if (commandIndex < commands.length) {
      const timer = setTimeout(() => {
        setTypedText(commands[commandIndex].cmd);
        setTimeout(() => {
          setTypedText(prev => prev + `\n${commands[commandIndex].output}`);
          setTimeout(() => {
            setTypedText(prev => prev + '\n');
            setCommandIndex(prev => prev + 1);
          }, 500);
        }, 500);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [commandIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 overflow-hidden"
    >
      {/* Terminal Header */}
      <div className="bg-black/50 px-4 py-3 border-b border-yellow-500/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal size={18} className="text-yellow-500" />
          <span className="text-yellow-500 font-mono text-sm">waseth@portfolio</span>
        </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 min-h-[300px]">
        <div className="font-mono text-sm text-green-400 mb-2">
          Welcome to Waseth's Portfolio Terminal v1.0
        </div>
        <div className="font-mono text-xs text-gray-400 mb-4">
          Type 'help' for available commands or wait for auto-sequence...
        </div>

        <pre className="font-mono text-sm text-white whitespace-pre-wrap">
          {typedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-yellow-500 ml-1"
          />
        </pre>

        {commandIndex === commands.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 pt-4 border-t border-yellow-500/20"
          >
            <div className="flex gap-2 text-xs text-gray-400">
              <Command size={12} />
              <span>Ready for commands | </span>
              <Cpu size={12} />
              <span>System online | </span>
              <Zap size={12} />
              <span>Portfolio loaded</span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default MobileTerminal;