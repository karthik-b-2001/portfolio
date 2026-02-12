import React from 'react';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, id, className = '', ...props }: InputProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    <motion.input
      id={id}
      className={`w-full px-4 py-2 border-2 border-red-600/30 rounded-lg 
        focus:ring-2 focus:ring-red-600 focus:border-red-600 
        bg-black text-white placeholder-gray-500
        transition-all duration-300
        ${className}`}
      whileFocus={{ borderColor: 'rgb(197, 0, 60)', boxShadow: '0 0 15px rgba(197, 0, 60, 0.2)' }}
      {...props}
    />
  </motion.div>
);

export default Input;