import { ThemeToggle } from './ThemeToggle';
import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#resume', label: 'Resume' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="md:hidden glass-effect border-t border-red-600/30"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
        {navItems.map(({ href, label }, i) => (
          <motion.a
            key={href}
            href={href}
            onClick={onClose}
            className="text-gray-300 hover:text-red-600 transition-colors font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
          >
            {label}
          </motion.a>
        ))}
        <div className="flex items-center justify-between pt-6 border-t border-red-600/20">
          <SocialLinks />
          <ThemeToggle />
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;