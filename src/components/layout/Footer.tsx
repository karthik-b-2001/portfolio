import SocialLinks from '../ui/SocialLinks';

const Footer = () => (
  <footer className="relative border-t border-cyan-400/20 glass-effect backdrop-blur-lg">
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div>
          <p className="text-gray-300 font-medium">
            &copy; {new Date().getFullYear()} <span className="gradient-text">Karthik Bharadwaj</span>
          </p>
        </div>
        <SocialLinks />
      </div>

      {/* Decorative gradient line */}
      
    </div>
  </footer>
);

export default Footer;