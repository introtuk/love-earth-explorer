
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export interface SubscriberData {
  email: string;
  subscribed_at?: string;
}

export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  try {
    // Check if Supabase is configured
    if (!isSupabaseConfigured()) {
      console.error('Supabase is not properly configured. Cannot subscribe to newsletter.');
      return { 
        success: false, 
        message: 'Newsletter subscription is currently unavailable. Please try again later or contact support.' 
      };
    }

    // Check if email already exists
    const { data: existingSubscriber } = await supabase
      .from('subscribers')
      .select('email')
      .eq('email', email)
      .single();

    if (existingSubscriber) {
      return { success: false, message: 'This email is already subscribed' };
    }

    // Insert new subscriber
    const { error } = await supabase
      .from('subscribers')
      .insert([{ email, subscribed_at: new Date().toISOString() }]);

    if (error) {
      console.error('Error subscribing to newsletter:', error);
      return { success: false, message: 'Failed to subscribe. Please try again later.' };
    }

    return { success: true, message: 'Successfully subscribed to newsletter!' };
  } catch (error) {
    console.error('Error in subscribeToNewsletter:', error);
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }
}
