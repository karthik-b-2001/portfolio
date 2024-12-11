import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'github' | 'linkedin' | 'email';
  icon?: LucideIcon;
  children: React.ReactNode;
}

const variantStyles = {
  primary: 'bg-blue-600 hover:bg-blue-500 text-white',
  secondary: 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white',
  github: 'bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white',
  linkedin: 'bg-blue-600 hover:bg-blue-500 text-white',
  email: 'bg-green-600 hover:bg-green-500 text-white',
};

const Button = ({ variant = 'primary', icon: Icon, children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={20} />}
      <span>{children}</span>
    </button>
  );
};

export default Button;