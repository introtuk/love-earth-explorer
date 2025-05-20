import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, TreePine } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on the home page
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Issues & Solutions', href: '/#issues' },
    { name: 'Tree Calculator', href: '/#calculator' },
    { name: 'Take Action', href: '/#action' },
    { name: 'Community', href: '/community' },
  ];

  // Helper function to handle hash links across pages
  const handleHashLink = (e, hash) => {
    e.preventDefault();

    // Extract the ID from the hash
    const id = hash.includes('/#') ? hash.split('/#')[1] : hash.substring(1);

    // If we're already on home page, just scroll
    if (isHomePage) {
      const element = document.getElementById(id);

      if (element) {
        // Get navbar height to offset scroll position
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;

        // Smooth scroll to the element
        window.scrollTo({
          top: element.offsetTop - navbarHeight,
          behavior: 'smooth',
        });
      }
    } else {
      // If we're on another page, navigate to home with the hash
      navigate(`/#${id}`);

      // Set a flag in sessionStorage to indicate we need to scroll after navigation
      sessionStorage.setItem('scrollToId', id);
    }

    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Effect to handle scrolling after navigation from another page
  useEffect(() => {
    if (isHomePage) {
      const scrollToId = sessionStorage.getItem('scrollToId');
      if (scrollToId) {
        // Clear the flag
        sessionStorage.removeItem('scrollToId');

        // Wait for the page to render
        setTimeout(() => {
          const element = document.getElementById(scrollToId);
          if (element) {
            // Get navbar height to offset scroll position
            const navbarHeight =
              document.querySelector('nav')?.offsetHeight || 0;

            // Smooth scroll to the element
            window.scrollTo({
              top: element.offsetTop - navbarHeight,
              behavior: 'smooth',
            });
          }
        }, 100); // Small delay to ensure elements are rendered
      }
    }
  }, [location.pathname, isHomePage]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/#home"
          onClick={e => handleHashLink(e, '/#home')}
          className="flex items-center gap-2 text-earth-forest font-display font-semibold text-xl"
        >
          <TreePine className="h-6 w-6 text-earth-green animate-pulse-gentle" />
          <span className="tracking-tight">LOVE EARTH</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link =>
            link.href.includes('/#') ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={e => handleHashLink(e, link.href)}
                className="text-earth-forest hover:text-earth-green transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-earth-green after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ) : (
              // Regular page links
              <Link
                key={link.name}
                to={link.href}
                className="text-earth-forest hover:text-earth-green transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-earth-green after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            to="/#join"
            onClick={e => handleHashLink(e, '/#join')}
            className="btn-earth"
          >
            Join Us
          </Link>
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
          isMobileMenuOpen
            ? 'opacity-100 h-auto'
            : 'opacity-0 h-0 pointer-events-none'
        )}
      >
        <div className="px-6 py-8 space-y-6 flex flex-col">
          {navLinks.map(link =>
            link.href.includes('/#') ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={e => handleHashLink(e, link.href)}
                className="text-earth-forest hover:text-earth-green transition-colors duration-300 text-lg font-medium"
              >
                {link.name}
              </Link>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-earth-forest hover:text-earth-green transition-colors duration-300 text-lg font-medium"
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            to="/#join"
            onClick={e => handleHashLink(e, '/#join')}
            className="btn-earth self-start"
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
