import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => (
  <motion.div 
    className={`bg-black border-2 border-red-600/40 rounded-lg p-6 transition-all duration-300 ${className}`}
    whileHover={{ 
      borderColor: 'rgb(197, 0, 60)',
      boxShadow: '0 0 30px rgba(197, 0, 60, 0.3)'
    }}
  >
    {children}
  </motion.div>
);

export default Card;