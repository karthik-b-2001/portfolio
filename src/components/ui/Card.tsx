import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => (
  <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-shadow hover:shadow-lg ${className}`}>
    {children}
  </div>
);

export default Card;