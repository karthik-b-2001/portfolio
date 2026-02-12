import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const GlowingCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
        a, button, [role="button"] {
          cursor: none !important;
        }
      `}</style>

      {/* Main glowing cursor */}
      <motion.div
        className="pointer-events-none fixed z-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-4 h-4 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full shadow-lg shadow-red-600/50" />
      </motion.div>

      {/* Outer glow ring */}
      <motion.div
        className="pointer-events-none fixed z-40"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 30,
        }}
      >
        <div className="w-10 h-10 border-2 border-red-600/40 rounded-full shadow-lg shadow-red-600/30 backdrop-blur-sm" />
      </motion.div>

      {/* Larger glow halo */}
      <motion.div
        className="pointer-events-none fixed z-30"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 40,
        }}
      >
        <motion.div
          className="w-16 h-16 border border-cyan-400/20 rounded-full"
          animate={{
            boxShadow: [
              '0 0 20px rgba(85, 234, 212, 0.3)',
              '0 0 40px rgba(85, 234, 212, 0.5)',
              '0 0 20px rgba(85, 234, 212, 0.3)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </>
  );
};

export default GlowingCursor;
