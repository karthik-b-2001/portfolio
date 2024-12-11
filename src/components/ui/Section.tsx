import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  className?: string;
  children: React.ReactNode;
  isDark?: boolean;
}

const Section = ({ id, title, className = '', children, isDark = false }: SectionProps) => (
  <section
    id={id}
    className={`py-20 ${
      isDark ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-gray-800'
    } ${className}`}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default Section;