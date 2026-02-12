import SocialLinks from '../ui/SocialLinks';

const Footer = () => (
  <footer className="relative border-t border-cyan-400/20 glass-effect backdrop-blur-lg">
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div>
          <p className="text-gray-300 font-medium">
            &copy; {new Date().getFullYear()} <span className="gradient-text">Karthik Bharadwaj</span>. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">Building the future, one line of code at a time.</p>
        </div>
        <SocialLinks />
      </div>

      {/* Decorative gradient line */}
      <div className="mt-8 pt-8 border-t border-cyan-400/10">
        <div className="flex justify-center">
          <div className="text-center text-gray-400 text-sm">
            <p>Designed & Built with <span className="text-cyan-400">💙</span></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;