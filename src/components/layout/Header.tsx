import React from 'react';
import { Menu, X } from 'lucide-react';
import SocialLinks from '../ui/SocialLinks';
import Navigation from '../ui/Navigation';
import MobileMenu from '../ui/MobileMenu';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <motion.div
        className="glass-effect border-b border-red-600/30 backdrop-blur-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.a
              href="#about"
              className="flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-red-600 to-yellow-400 rounded-lg flex items-center justify-center font-bold text-black group-hover:shadow-[0_0_20px_rgba(197,0,60,0.8)] transition-all duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity }}
              >
                KB
              </motion.div>
              <span className="hidden sm:inline text-white font-semibold">Portfolio</span>
            </motion.a>

            <Navigation className="hidden md:flex" />

            <div className="hidden md:flex items-center space-x-6">
              <SocialLinks />
            </div>

            <button
              className="md:hidden text-gray-300 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;