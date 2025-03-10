
import { Earth, Heart, TreePine, Instagram, Twitter, Facebook, Youtube, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Instagram', icon: <Instagram size={18} />, href: '#' },
    { name: 'Twitter', icon: <Twitter size={18} />, href: '#' },
    { name: 'Facebook', icon: <Facebook size={18} />, href: '#' },
    { name: 'Youtube', icon: <Youtube size={18} />, href: '#' }
  ];
  
  const resourceLinks = [
    { name: 'WWF', href: 'https://www.worldwildlife.org/' },
    { name: 'Greenpeace', href: 'https://www.greenpeace.org/' },
    { name: 'The Nature Conservancy', href: 'https://www.nature.org/' },
    { name: 'Earth Day Network', href: 'https://www.earthday.org/' },
    { name: 'Conservation International', href: 'https://www.conservation.org/' }
  ];
  
  return (
    <footer className="relative bg-earth-forest text-white pt-16 pb-8">
      <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-earth-green to-earth-blue opacity-60"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-white font-display font-semibold text-xl mb-4">
              <TreePine className="h-6 w-6 text-earth-light-green" />
              <span className="tracking-tight">LOVE EARTH</span>
            </div>
            
            <p className="text-white/80 mb-6">
              A movement dedicated to raising awareness and driving positive environmental change through education and action.
            </p>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#issues" className="text-white/80 hover:text-white transition-colors">Issues & Solutions</a>
              </li>
              <li>
                <a href="#calculator" className="text-white/80 hover:text-white transition-colors">Tree Calculator</a>
              </li>
              <li>
                <a href="#action" className="text-white/80 hover:text-white transition-colors">Take Action</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center text-white/60 text-sm">
          <div className="flex items-center justify-center gap-1 mb-2">
            <span>Made with</span>
            <Heart size={14} className="text-earth-light-green fill-earth-light-green animate-pulse-gentle" />
            <span>for</span>
            <Earth size={14} className="text-earth-light-blue" />
          </div>
          <p>© {currentYear} LOVE EARTH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
