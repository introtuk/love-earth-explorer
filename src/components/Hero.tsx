
import { useEffect, useRef } from 'react';
import { ChevronDown, Leaf } from 'lucide-react';

const Hero = () => {
  const leafRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    // Create falling leaf animation
    const leafElements = leafRefs.current.filter(Boolean);
    
    leafElements.forEach((leaf) => {
      if (!leaf) return;
      
      const startPositionX = Math.random() * 100; // Random X position (0-100%)
      const fallDuration = 10 + Math.random() * 20; // Random duration (10-30s)
      const swayStrength = 10 + Math.random() * 30; // Random sway (10-40px)
      const delay = Math.random() * 15; // Random delay (0-15s)
      const rotationSpeed = 2 + Math.random() * 4; // Random rotation speed
      
      leaf.style.left = `${startPositionX}%`;
      leaf.style.animation = `fall ${fallDuration}s linear ${delay}s infinite, 
                             sway ${fallDuration / 3}s ease-in-out ${delay}s infinite alternate, 
                             rotate ${rotationSpeed}s linear infinite`;
    });
    
    // Add keyframes for leaf animations
    const styleSheet = document.styleSheets[0];
    
    styleSheet.insertRule(`
      @keyframes fall {
        0% { top: -10%; }
        100% { top: 100%; }
      }`, styleSheet.cssRules.length);
      
    styleSheet.insertRule(`
      @keyframes sway {
        0% { transform: translateX(0px) rotate(0deg); }
        50% { transform: translateX(var(--sway-strength)) rotate(45deg); }
        100% { transform: translateX(calc(var(--sway-strength) * -1)) rotate(-45deg); }
      }`, styleSheet.cssRules.length);
      
    styleSheet.insertRule(`
      @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }`, styleSheet.cssRules.length);
  }, []);
  
  // Create array of falling leaves
  const fallingLeaves = Array(10).fill(null).map((_, index) => (
    <div 
      key={index}
      ref={el => leafRefs.current[index] = el}
      className="absolute opacity-40 text-earth-green"
      style={{ 
        '--sway-strength': `${10 + Math.random() * 30}px`,
        zIndex: 1
      } as React.CSSProperties}
    >
      <Leaf size={10 + Math.random() * 20} />
    </div>
  ));

  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 relative overflow-hidden flex flex-col justify-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-earth-light-blue/20 to-white/90"></div>
      <div className="absolute inset-0 -z-20 bg-gradient-earth opacity-50"></div>
      
      {/* Falling leaves */}
      {fallingLeaves}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-earth-green/10 text-earth-green mb-6 font-medium text-sm animate-pulse-gentle">
            Our planet needs us now more than ever
          </div>
          
          <h1 className="text-earth-forest mb-6 leading-tight">
            Let's <span className="text-earth-green">Love</span> and <span className="text-earth-blue">Protect</span> Our Earth Together
          </h1>
          
          <p className="text-lg md:text-xl text-earth-forest/80 mb-10 max-w-2xl mx-auto">
            Join our movement to raise awareness, find solutions, and take action to preserve our beautiful planet for future generations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#issues" className="btn-earth">
              Explore Issues & Solutions
            </a>
            <a href="#calculator" className="btn-earth bg-earth-blue hover:bg-earth-blue/80">
              Calculate Your Impact
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#issues" className="text-earth-green/70 hover:text-earth-green transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
