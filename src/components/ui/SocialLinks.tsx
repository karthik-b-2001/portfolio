import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';

const SocialLinks = () => (
  <div className="flex space-x-4">
    {[
      {
        href: "https://github.com/karthik-b-2001",
        Icon: Github,
        color: "from-red-600 to-yellow-400",
        label: "GitHub",
      },
      {
        href: personalInfo.linkedin,
        Icon: Linkedin,
        color: "from-yellow-400 to-cyan-400",
        label: "LinkedIn",
      },
      {
        href: `mailto:${personalInfo.email}`,
        Icon: Mail,
        color: "from-cyan-400 to-red-600",
        label: "Email",
      },
    ].map(({ href, Icon, color, label }, i) => (
      <motion.a
        key={i}
        href={href}
        target={href.startsWith("mailto") ? undefined : "_blank"}
        rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
        className="p-2 rounded-lg bg-black border-2 border-red-600 text-gray-300 hover:text-red-600 transition-all duration-300"
        title={label}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1, duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r rounded-lg blur opacity-0"
          style={{
            backgroundImage: `linear-gradient(135deg, ${
              i === 0 ? "#c5003c, #f3e600" : i === 1 ? "#f3e600, #55ead4" : "#55ead4, #c5003c"
            })`,
          }}
          whileHover={{ opacity: 0.3 }}
        />
        <Icon size={20} className="relative" />
      </motion.a>
    ))}
  </div>
);

export default SocialLinks;