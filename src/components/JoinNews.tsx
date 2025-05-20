import NewsletterForm from './action/NewsletterForm';

const JoinNews = () => {
  return (
    <section id="join" className="py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-earth-light-blue/30 to-white/90"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto glass-panel p-8 md:p-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-earth-forest">
            Join Our Movement
          </h3>

          <p className="text-earth-forest/80 mb-8">
            Subscribe to our newsletter to receive updates, tips, and
            invitations to environmental events.
          </p>

          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default JoinNews;
