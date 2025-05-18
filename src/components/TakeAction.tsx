
import ActionCard from './action/ActionCard';
import NewsletterForm from './action/NewsletterForm';
import { actionItems } from './action/actionData';

const TakeAction = () => {
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
          {actionItems.map((action, index) => (
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
          
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default TakeAction;
