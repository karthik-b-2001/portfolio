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

const Navigation = ({ className = '' }: { className?: string }) => (
  <nav className={`space-x-8 ${className}`}>
    {navItems.map(({ href, label }) => (
      <a
        key={href}
        href={href}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        {label}
      </a>
    ))}
  </nav>
);

export default Navigation;