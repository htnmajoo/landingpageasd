import React, { useState } from 'react'; // Add useState
import { ArrowRight } from 'lucide-react';
import LeadForm from './LeadForm'; // Import LeadForm
import { trackClick } from '../lib/supabase'; // Import trackClick

const Hero: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<'trial' | 'whatsapp'>('trial');

  /**
   * Handles the click event for the 'Free Trial' button.
   * Tracks the click event and shows the lead form for trial sign-up.
   */
  const handleTrialClick = async () => {
    await trackClick('trial');
    setFormType('trial');
    setShowForm(true);
  };

  /**
   * Handles the click event for the 'WhatsApp' button.
   * Tracks the click event and shows the lead form for WhatsApp contact.
   */
  const handleWhatsAppClick = async () => {
    await trackClick('whatsapp');
    setFormType('whatsapp');
    setShowForm(true);
  };

  /**
   * Handles the successful submission of the lead form.
   * Closes the form and redirects the user based on the form type (trial or WhatsApp).
   */
  const handleFormSuccess = () => {
    setShowForm(false);
    if (formType === 'trial') {
      window.location.href = 'https://dashboard.majoo.id/auth/register?ref=MAJ0002242';
    } else {
      window.location.href = 'https://wa.me/message/HI4JF2AQ2MELK1';
    }
  };

  return (
    <>
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Aplikasi Kasir Online Terlengkap untuk UMKM
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Kelola toko, stok, laporan, dan karyawan dari satu aplikasi.
              <span className="block mt-2 font-medium">Mudah. Cepat. Aman.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={handleTrialClick} // Change to onClick handler
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Daftar Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={handleWhatsAppClick} // Change to onClick handler
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Chat via WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img 
              src="https://portal-gcs-cdn.majoo.id/v2/pages/product/fitur-hero.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="UMKM menggunakan aplikasi Majoo POS" 
              className="w-full h-auto rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="mt-16 py-6 px-8 bg-white rounded-lg shadow-lg">
          <p className="text-center text-lg font-medium text-gray-700">
            Dipercaya oleh <span className="text-primary-600 font-bold">45.000+</span> pelaku usaha di <span className="text-primary-600 font-bold">600+</span> kota di Indonesia
          </p>
        </div>
      </div>
    </section>

    <LeadForm
      isOpen={showForm}
      onClose={() => setShowForm(false)}
      source={formType}
      onSuccess={handleFormSuccess}
    />
    </>
  );
};

export default Hero;