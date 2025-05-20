import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { subscribeToNewsletter } from '@/services/newsletterService';

const NewsletterForm = () => {
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
      const result = await subscribeToNewsletter(email.toLocaleLowerCase());

      if (result.success) {
        toast({
          title: 'Subscription successful!',
          description: 'Thank you for joining our environmental movement.',
          variant: 'default',
        });
        setIsSubmitted(true);
        setEmail('');

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setError(result.message);
        toast({
          title: 'Subscription failed',
          description: result.message,
          variant: 'destructive',
        });
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      toast({
        title: 'Error',
        description: 'Failed to subscribe. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email address"
          className="input-earth flex-grow"
          disabled={isSubmitted || isLoading}
        />

        <button
          type="submit"
          className={cn(
            'btn-earth flex items-center justify-center gap-2 min-w-[120px]',
            isSubmitted && 'bg-earth-green/80 hover:bg-earth-green/80',
            isLoading && 'opacity-70 cursor-not-allowed'
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

      {error && <p className="text-red-500 mt-2 text-sm text-left">{error}</p>}

      <p className="text-xs text-earth-forest/60 mt-4 text-left">
        We respect your privacy and will never share your information. You can
        unsubscribe at any time.
      </p>
    </form>
  );
};

export default NewsletterForm;
