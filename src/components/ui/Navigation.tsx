import { motion } from 'framer-motion';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#resume', label: 'Resume' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navigation = ({ className = '' }: { className?: string }) => (
  <nav className={`space-x-8 ${className}`}>
    {navItems.map(({ href, label }, i) => (
      <motion.a
        key={href}
        href={href}
        className="text-gray-300 hover:text-red-600 transition-colors font-medium duration-300 relative group"
        whileHover={{ y: -2 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.05, duration: 0.5 }}
      >
        {label}
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-600 to-yellow-400 group-hover:to-red-600 rounded-full"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    ))}
  </nav>
);

export default Navigation;