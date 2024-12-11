import { ThemeToggle } from './ThemeToggle';
import SocialLinks from './SocialLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 transition-colors">
      <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <a
          href="#about"
          onClick={onClose}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          About
        </a>
        <a
          href="#experience"
          onClick={onClose}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          Experience
        </a>
        <a
          href="#education"
          onClick={onClose}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          Education
        </a>
        <a
          href="#projects"
          onClick={onClose}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={onClose}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          Contact
        </a>
        <div className="flex items-center justify-between pt-4 border-t dark:border-gray-700">
          <SocialLinks />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;