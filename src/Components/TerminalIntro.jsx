// src/components/TerminalIntro.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const lines = [
  '> Initializing system...',
  '> Loading assets...',
  '> Establishing secure connection...',
  '> Access granted: Welcome!',
];

export default function TerminalIntro({ onComplete }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timeout = setTimeout(() => setCurrentLine(currentLine + 1), 1200);
      return () => clearTimeout(timeout);
    } else {
      const endTimeout = setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 1500);
      return () => clearTimeout(endTimeout);
    }
  }, [currentLine, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black text-green-400 font-mono text-lg px-6 py-12 flex flex-col justify-center items-start z-[9999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {lines.slice(0, currentLine + 1).map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.3 }}
              className="mb-2"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}