
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { TreePine, Leaf, Cloud, Water, AlertTriangle, LightbulbIcon } from 'lucide-react';

interface IssueCardProps {
  title: string;
  description: string;
  solution: string;
  icon: React.ReactNode;
  color: string;
  gradientClass: string;
  delay: number;
}

const IssueCard = ({ title, description, solution, icon, color, gradientClass, delay }: IssueCardProps) => {
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
        'card-earth transition-all duration-700 opacity-0 translate-y-8',
        isVisible && 'opacity-100 translate-y-0'
      )}
    >
      <div className={cn('p-4 rounded-xl mb-4', gradientClass)}>
        <div className={cn('w-12 h-12 flex items-center justify-center rounded-full', color)}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-earth-forest">{title}</h3>
      <p className="text-earth-forest/80 mb-4">{description}</p>
      
      <div className="border-t border-earth-green/10 pt-4 mt-auto">
        <div className="flex items-start gap-2">
          <div className="bg-earth-green/10 rounded-full p-1 mt-0.5">
            <LightbulbIcon size={16} className="text-earth-green" />
          </div>
          <div>
            <h4 className="font-medium text-earth-forest mb-1">Solution</h4>
            <p className="text-sm text-earth-forest/80">{solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Issues = () => {
  const issues = [
    {
      title: "Deforestation",
      description: "Every year, we lose forests the size of Panama due to industrial activities, agriculture, and urban expansion.",
      solution: "Support reforestation initiatives, choose sustainably sourced products, and reduce paper consumption.",
      icon: <TreePine className="text-white" size={24} />,
      color: "bg-earth-green",
      gradientClass: "bg-gradient-forest"
    },
    {
      title: "Climate Change",
      description: "Rising global temperatures are causing extreme weather, rising sea levels, and threatening ecosystems worldwide.",
      solution: "Reduce carbon footprint by using renewable energy, public transport, and adopting plant-based meals.",
      icon: <Cloud className="text-white" size={24} />,
      color: "bg-earth-blue",
      gradientClass: "bg-gradient-ocean"
    },
    {
      title: "Water Pollution",
      description: "Chemicals, plastics, and waste are contaminating our oceans, rivers, and drinking water sources.",
      solution: "Minimize plastic use, properly dispose of hazardous waste, and support clean water initiatives.",
      icon: <Water className="text-white" size={24} />,
      color: "bg-earth-blue",
      gradientClass: "bg-gradient-ocean"
    },
    {
      title: "Biodiversity Loss",
      description: "Species are going extinct at an alarming rate, disrupting ecosystems and reducing nature's resilience.",
      solution: "Support conservation efforts, create wildlife-friendly spaces, and choose eco-friendly products.",
      icon: <Leaf className="text-white" size={24} />,
      color: "bg-earth-green",
      gradientClass: "bg-gradient-forest"
    },
    {
      title: "Air Pollution",
      description: "Industrial emissions, vehicle exhaust, and burning fossil fuels are degrading air quality and causing health issues.",
      solution: "Use energy-efficient appliances, choose public transport or electric vehicles, and support clean air policies.",
      icon: <AlertTriangle className="text-white" size={24} />,
      color: "bg-earth-brown",
      gradientClass: "bg-gradient-earth"
    },
    {
      title: "Waste Management",
      description: "Improper waste disposal leads to pollution, greenhouse gas emissions, and harms wildlife.",
      solution: "Practice recycling, composting, and reduce consumption of single-use items.",
      icon: <AlertTriangle className="text-white" size={24} />,
      color: "bg-earth-brown",
      gradientClass: "bg-gradient-earth"
    }
  ];

  return (
    <section id="issues" className="py-24 relative">
      <div className="absolute inset-0 -z-10 leaf-pattern opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-earth-green/10 text-earth-green mb-6 font-medium text-sm">
            Environmental Challenges & Solutions
          </div>
          
          <h2 className="text-earth-forest mb-6">Understanding Our Impact</h2>
          
          <p className="text-lg text-earth-forest/80">
            By recognizing the challenges our planet faces and learning about solutions, 
            we can all contribute to a healthier, more sustainable Earth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {issues.map((issue, index) => (
            <IssueCard 
              key={index}
              title={issue.title}
              description={issue.description}
              solution={issue.solution}
              icon={issue.icon}
              color={issue.color}
              gradientClass={issue.gradientClass}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Issues;
