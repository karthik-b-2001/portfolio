import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../../hooks/useDarkMode';

export const ThemeToggle = () => {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg bg-black border-2 border-red-600 text-gray-300 hover:text-red-600 transition-all duration-300"
      aria-label="Toggle theme"
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.4 }}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </motion.button>
  );
};