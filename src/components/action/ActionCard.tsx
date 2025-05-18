
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

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

export default ActionCard;
