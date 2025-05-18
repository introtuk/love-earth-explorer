
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { 
  Leaf, 
  TreePine, 
  Recycle, 
  Droplets, 
  LucideLeafyGreen, 
  CheckCircle2, 
  Sun, 
  ArrowRight 
} from 'lucide-react';
import { subscribeToNewsletter } from '@/services/newsletterService';

interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ActionCard = ({ title, description, icon, delay }: ActionCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        'card-earth group transition-all duration-700 opacity-0 translate-y-8',
        isVisible && 'opacity-100 translate-y-0'
      )}
    >
      <div className="mb-4 text-earth-green group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-earth-forest">{title}</h3>
      <p className="text-earth-forest/80">{description}</p>
    </div>
  );
};

const TakeAction = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const result = await subscribeToNewsletter(email);
      
      if (result.success) {
        toast({
          title: "Subscription successful!",
          description: "Thank you for joining our environmental movement.",
          variant: "default",
        });
        setIsSubmitted(true);
        setEmail('');
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setError(result.message);
        toast({
          title: "Subscription failed",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const actions = [
    {
      title: "Plant Trees Locally",
      description: "Join local tree planting initiatives or start your own. Every tree makes a difference in carbon sequestration.",
      icon: <TreePine size={32} />
    },
    {
      title: "Reduce, Reuse, Recycle",
      description: "Minimize waste by consuming less, reusing items, and recycling materials properly.",
      icon: <Recycle size={32} />
    },
    {
      title: "Save Water",
      description: "Install water-saving fixtures, fix leaks, and practice mindful consumption of this precious resource.",
      icon: <Droplets size={32} />
    },
    {
      title: "Choose Sustainable Food",
      description: "Opt for locally grown, organic produce and reduce meat consumption to lower your carbon footprint.",
      icon: <LucideLeafyGreen size={32} />
    },
    {
      title: "Use Clean Energy",
      description: "Switch to renewable energy sources or support clean energy initiatives in your community.",
      icon: <Sun size={32} />
    },
    {
      title: "Educate Others",
      description: "Share knowledge about environmental issues and solutions with your friends, family, and community.",
      icon: <Leaf size={32} />
    }
  ];

  return (
    <section id="action" className="py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-earth-light-blue/30 to-white/90"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-earth-green/10 text-earth-green mb-6 font-medium text-sm">
            Make a Difference
          </div>
          
          <h2 className="text-earth-forest mb-6">Take Action Today</h2>
          
          <p className="text-lg text-earth-forest/80">
            Small actions, when multiplied by millions of people, can transform the world. 
            Here are some ways you can contribute to a healthier planet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {actions.map((action, index) => (
            <ActionCard 
              key={index}
              title={action.title}
              description={action.description}
              icon={action.icon}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div id="join" className="max-w-3xl mx-auto glass-panel p-8 md:p-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-earth-forest">Join Our Movement</h3>
          
          <p className="text-earth-forest/80 mb-8">
            Subscribe to our newsletter to receive updates, tips, and invitations to environmental events.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="input-earth flex-grow"
                disabled={isSubmitted || isLoading}
              />
              
              <button 
                type="submit"
                className={cn(
                  "btn-earth flex items-center justify-center gap-2 min-w-[120px]",
                  isSubmitted && "bg-earth-green/80 hover:bg-earth-green/80",
                  isLoading && "opacity-70 cursor-not-allowed"
                )}
                disabled={isSubmitted || isLoading}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Subscribed!</span>
                  </>
                ) : isLoading ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>
            
            {error && (
              <p className="text-red-500 mt-2 text-sm text-left">{error}</p>
            )}
            
            <p className="text-xs text-earth-forest/60 mt-4 text-left">
              We respect your privacy and will never share your information. You can unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TakeAction;
