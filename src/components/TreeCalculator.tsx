
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { TreePine, Leaf } from 'lucide-react';

const TreeCalculator = () => {
  const [birthYear, setBirthYear] = useState<string>("");
  const [trees, setTrees] = useState<number | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (calculatorRef.current) {
      observer.observe(calculatorRef.current);
    }

    return () => {
      if (calculatorRef.current) {
        observer.unobserve(calculatorRef.current);
      }
    };
  }, []);
  
  const calculateTrees = () => {
    // Clear previous results and errors
    setError(null);
    
    // Validate input
    const yearNum = parseInt(birthYear, 10);
    const currentYear = new Date().getFullYear();
    
    if (isNaN(yearNum)) {
      setError("Please enter a valid year");
      return;
    }
    
    if (yearNum < 1900) {
      setError("Please enter a year after 1900");
      return;
    }
    
    if (yearNum > currentYear) {
      setError("Birth year cannot be in the future");
      return;
    }
    
    // Formula: Calculate carbon footprint based on age and convert to trees
    // This is a simplified estimate - 1 tree absorbs about 25kg CO2 per year
    // Average carbon footprint varies by country, but let's use a simplified calculation
    
    const age = currentYear - yearNum;
    const carbonFootprint = age * 4; // Simplified: Each year of life = 4 tons of CO2
    const treesNeeded = Math.round(carbonFootprint / 0.025); // 1 tree absorbs ~25kg (0.025 tons) per year
    
    // Start animation
    setIsCalculated(true);
    setTrees(treesNeeded);
    
    // Reset animation progress
    setAnimationProgress(0);
    
    // Clear any existing animation
    if (animationRef.current) {
      clearInterval(animationRef.current);
    }
    
    // Animate the counter
    let progress = 0;
    const duration = 1500; // 1.5 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    const increment = 1 / steps;
    
    animationRef.current = setInterval(() => {
      progress += increment;
      setAnimationProgress(Math.min(progress, 1));
      
      if (progress >= 1) {
        if (animationRef.current) {
          clearInterval(animationRef.current);
        }
      }
    }, interval);
  };
  
  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits
    const value = e.target.value.replace(/\D/g, '');
    setBirthYear(value);
    setIsCalculated(false);
  };
  
  const displayedValue = trees !== null 
    ? Math.round(trees * animationProgress)
    : 0;
    
  return (
    <section id="calculator" className="py-24 relative bg-gradient-to-b from-white to-earth-light-blue/20">
      <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIiBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0zMCAwTDYwIDMwTDMwIDYwTDAgMzBMMzAgMHoiIGZpbGw9IiM2NUI2N0QiLz48L3N2Zz4=')] opacity-50"></div>
      
      <div 
        ref={calculatorRef}
        className={cn(
          "container mx-auto px-6 transition-all duration-1000 opacity-0 translate-y-8",
          isVisible && "opacity-100 translate-y-0"
        )}
      >
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-earth-green/10 text-earth-green mb-6 font-medium text-sm">
                Your Environmental Impact
              </div>
              
              <h2 className="text-earth-forest mb-6">Tree Calculator</h2>
              
              <p className="text-lg text-earth-forest/80 max-w-2xl mx-auto">
                Discover how many trees you should plant to offset your lifetime carbon footprint based on your birth year.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center">
              <div className="w-full md:w-1/2">
                <label htmlFor="birthYear" className="block text-earth-forest font-medium mb-2">
                  Enter Your Birth Year
                </label>
                
                <div className="flex gap-4">
                  <input
                    type="text"
                    id="birthYear"
                    value={birthYear}
                    onChange={handleYearChange}
                    placeholder="e.g. 1990"
                    maxLength={4}
                    className="input-earth w-full"
                  />
                  
                  <button 
                    onClick={calculateTrees}
                    className="btn-earth whitespace-nowrap"
                  >
                    Calculate
                  </button>
                </div>
                
                {error && (
                  <p className="text-red-500 mt-2 text-sm">{error}</p>
                )}
                
                <p className="text-earth-forest/70 text-sm mt-4">
                  This calculation is based on average carbon footprint estimates and tree absorption rates.
                </p>
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col items-center">
                <div 
                  className={cn(
                    "relative w-64 h-64 rounded-full flex items-center justify-center border-4 transition-all duration-500",
                    isCalculated 
                      ? "border-earth-green bg-earth-green/10" 
                      : "border-earth-green/30 bg-earth-green/5"
                  )}
                >
                  {Array.from({ length: isCalculated ? 8 : 4 }).map((_, i) => (
                    <div 
                      key={i}
                      className={cn(
                        "absolute transition-all duration-500",
                        isCalculated ? "opacity-100" : "opacity-40"
                      )}
                      style={{
                        top: `calc(50% + ${Math.sin(i * (Math.PI / 4)) * 70}px)`,
                        left: `calc(50% + ${Math.cos(i * (Math.PI / 4)) * 70}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <TreePine 
                        className={cn(
                          "text-earth-green transition-all",
                          isCalculated ? "animate-pulse-gentle" : ""
                        )} 
                        size={i % 2 === 0 ? 28 : 24} 
                      />
                    </div>
                  ))}
                  
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-earth-green mb-2">
                      {isCalculated ? displayedValue : 0}
                    </div>
                    <div className="text-earth-forest/80 font-medium">Trees to Plant</div>
                  </div>
                </div>
                
                {isCalculated && trees !== null && (
                  <p className="text-center mt-6 text-earth-forest/80 max-w-xs">
                    Planting approximately <span className="font-semibold text-earth-forest">{trees} trees</span> would 
                    help offset your lifetime carbon footprint.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeCalculator;
