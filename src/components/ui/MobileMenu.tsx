import { ThemeToggle } from './ThemeToggle';
import SocialLinks from './SocialLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#resume', label: 'Resume' },
  { href: '#videos', label: 'Intro' },
  { href: '#job-strategy', label: 'Strategy' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 transition-colors">
      <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        {navItems.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={onClose}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {label}
          </a>
        ))}
        <div className="flex items-center justify-between pt-4 border-t dark:border-gray-700">
          <SocialLinks />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;