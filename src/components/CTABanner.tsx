import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { trackClick } from '../lib/supabase';
import LeadForm from './LeadForm';

const CTABanner: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<'trial' | 'whatsapp'>('trial');

  const handleTrialClick = async () => {
    await trackClick('trial');
    setFormType('trial');
    setShowForm(true);
  };

  const handleWhatsAppClick = async () => {
    await trackClick('whatsapp');
    setFormType('whatsapp');
    setShowForm(true);
  };

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
      <section className="py-16 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-white"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-7/12 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tingkatkan Efisiensi Bisnis Anda Sekarang
              </h2>
              <p className="text-lg text-primary-100 mb-6">
                Jangan biarkan manajemen bisnis menyita waktu Anda. Gunakan majoo dan fokus pada pengembangan bisnis Anda.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Proses setup cepat, mulai hari ini</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Tanpa biaya instalasi</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Free training untuk tim Anda</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Dukungan teknis 24/7</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-4/12 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mulai Perjalanan Digital Anda
              </h3>
              <p className="text-gray-600 mb-6">
                Daftar sekarang dan nikmati free trial selama 14 hari dengan akses ke semua fitur premium.
              </p>
              
              <div className="space-y-4">
                <button 
                  onClick={handleTrialClick}
                  className="flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Daftar Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center w-full px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Chat via WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
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

export default CTABanner;