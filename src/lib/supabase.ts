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

export const submitLead = async (lead: Lead) => {
  try {
    const { error } = await supabase.from('leads').insert(lead);
    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error submitting lead:', error);
    return false;
  }
};