import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id?: string;
  title: string;
  className?: string;
  children: React.ReactNode;
  isDark?: boolean;
}

const Section = ({ id, title, className = '', children, isDark = false }: SectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`py-20 bg-black ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 bg-clip-text text-transparent mb-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;