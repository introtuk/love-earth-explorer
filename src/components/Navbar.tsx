
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, TreePine, LucideTreePine } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Issues & Solutions', href: '#issues' },
    { name: 'Tree Calculator', href: '#calculator' },
    { name: 'Take Action', href: '#action' }
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="flex items-center gap-2 text-earth-forest font-display font-semibold text-xl"
        >
          <TreePine className="h-6 w-6 text-earth-green animate-pulse-gentle" />
          <span className="tracking-tight">LOVE EARTH</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-earth-forest hover:text-earth-green transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-earth-green after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#join" 
            className="btn-earth"
          >
            Join Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-earth-forest focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-x-0 top-[72px] bg-white/95 backdrop-blur-md z-50 shadow-lg transition-all duration-300 ease-in-out',
          isMobileMenuOpen ? 'opacity-100 h-auto' : 'opacity-0 h-0 pointer-events-none'
        )}
      >
        <div className="px-6 py-8 space-y-6 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-earth-forest hover:text-earth-green transition-colors duration-300 text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#join" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-earth self-start"
          >
            Join Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
