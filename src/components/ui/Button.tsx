import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'github' | 'linkedin' | 'email';
  icon?: LucideIcon;
  children: React.ReactNode;
}

const variantStyles = {
  primary: 'bg-gradient-to-r from-red-600 to-red-700 hover:shadow-lg hover:shadow-red-600/50 text-white',
  secondary: 'bg-yellow-400 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/50 text-black',
  github: 'bg-black border-2 border-red-600 hover:bg-red-600/10 hover:shadow-lg hover:shadow-red-600/30 text-white',
  linkedin: 'bg-black border-2 border-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/30 text-cyan-400',
  email: 'bg-gradient-to-r from-red-600 to-red-700 hover:shadow-lg hover:shadow-red-600/50 text-white',
};

const Button = ({ variant = 'primary', icon: Icon, children, className = '', ...props }: ButtonProps) => {
  return (
    <motion.button
      className={`px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...(props as any)}
    >
      {Icon && <motion.div animate={{ scale: 1 }} transition={{ duration: 0.2 }}><Icon size={20} /></motion.div>}
      <span>{children}</span>
    </motion.button>
  );
};

export default Button;