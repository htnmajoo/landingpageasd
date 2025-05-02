import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
  name: string;
  whatsapp: string;
  business_type: string;
  needs: string;
  source: 'trial' | 'whatsapp';
}

export const trackClick = async (type: 'trial' | 'whatsapp') => {
  try {
    await supabase.from('click_events').insert({ type });
  } catch (error) {
    console.error('Error tracking click:', error);
  }
};

/**
 * Submits lead data to the Supabase 'leads' table.
 * Logs the lead data being submitted.
 * @param lead The lead data object.
 * @returns True if submission is successful, false otherwise.
 */
export const submitLead = async (lead: Lead) => {
  console.log('Submitting lead:', lead); // Added for debugging
  try {
    const { error } = await supabase.from('leads').insert(lead);
    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error submitting lead:', error); // Log error
    return false;
  }
};