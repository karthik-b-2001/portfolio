import React from 'react';
import { motion } from 'framer-motion';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextArea = ({ label, id, className = '', ...props }: TextAreaProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    <motion.textarea
      id={id}
      className={`w-full px-4 py-2 border-2 border-red-600/30 rounded-lg 
        focus:ring-2 focus:ring-red-600 focus:border-red-600 
        bg-black text-white placeholder-gray-500 resize-none
        transition-all duration-300
        ${className}`}
      {...(props as any)}
    />
  </motion.div>
);

export default TextArea;