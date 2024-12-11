import SocialLinks from '../ui/SocialLinks';

const Footer = () => (
  <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 transition-colors">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} Karthik Bharadwaj. All rights reserved.</p>
        <SocialLinks />
      </div>
    </div>
  </footer>
);

export default Footer;