import React, { useState } from 'react'; // Add useState
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import LeadForm from './LeadForm'; // Import LeadForm
import { trackClick } from '../lib/supabase'; // Import trackClick

const Footer: React.FC = () => {
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
      window.location.href = 'https://wa.me/6287885884966'; // Updated WhatsApp number
    }
  };

  return (
    <>
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          {/* Menggunakan flexbox untuk distribusi konten yang lebih baik */}
          <div className="flex flex-wrap justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="https://portal-gcs-cdn.majoo.id/public/download/logo_icon/majoo_logo_icon_5.png"
                  alt="Majoo Logo"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Aplikasi kasir online terlengkap untuk UMKM. Kelola toko, stok, laporan, dan karyawan dari satu aplikasi.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/majoo.indonesia/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#80CBC4] transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/revolusimajoo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#80CBC4] transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
                        
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Kontak</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-[#80CBC4] mr-2 mt-0.5" />
                  <span className="text-gray-400">021 1500 460</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-[#80CBC4] mr-2 mt-0.5" />
                  <span className="text-gray-400">halo@majoo.id</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#80CBC4] mr-2 mt-0.5" />
                  <span className="text-gray-400">
                    <h1>Kantor Pusat</h1><br></br><h2>SMESCO Tower, lantai 3
    Jl. Gatot Subroto No.Kav. 94, RT.11/RW.3, Pancoran, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12780</h2>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 majoo. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleTrialClick} // Change to onClick handler
                className="inline-flex items-center px-4 py-2 bg-[#008080] text-white text-sm font-medium rounded-lg hover:bg-[#006D5B] transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Daftar Free Trial
              </button>
              <button 
                onClick={handleWhatsAppClick} // Change to onClick handler
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Chat via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </footer>
      <LeadForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        source={formType}
        onSuccess={handleFormSuccess}
      />
    </>
  );
};

export default Footer;