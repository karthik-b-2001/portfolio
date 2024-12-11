import React from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import SocialLinks from '../ui/SocialLinks';
import Navigation from '../ui/Navigation';
import MobileMenu from '../ui/MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm z-50 shadow-sm transition-colors">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">KB</h1>
          
          <Navigation className="hidden md:flex" />

          <div className="hidden md:flex items-center space-x-4">
            <SocialLinks />
            <ThemeToggle />
          </div>

          <button 
            className="md:hidden text-gray-600 dark:text-gray-300" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;