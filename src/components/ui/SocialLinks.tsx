import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const SocialLinks = () => (
  <div className="flex space-x-4">
    <a
      href="https://github.com/karthik-b-2001"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
    >
      <Github size={20} />
    </a>
    <a
      href={personalInfo.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
    >
      <Linkedin size={20} />
    </a>
    <a
      href={`mailto:${personalInfo.email}`}
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
    >
      <Mail size={20} />
    </a>
  </div>
);

export default SocialLinks;