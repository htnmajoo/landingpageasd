import React, { useState } from 'react'; // Add useState
import { ShoppingBag, BarChart2, Users, CreditCard, Heart } from 'lucide-react';
import LeadForm from './LeadForm'; // Import LeadForm
import { trackClick } from '../lib/supabase'; // Import trackClick

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="feature-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="mb-4 text-[#008080]">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<'trial' | 'whatsapp'>('trial'); // Default to trial

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
   * Handles the successful submission of the lead form.
   * Closes the form and redirects the user to the trial registration page.
   */
  const handleFormSuccess = () => {
    setShowForm(false);
    // Only trial source is relevant here
    window.location.href = 'https://dashboard.majoo.id/auth/register?ref=MAJ0002242';
  };

  return (
    <>
    <section id="fitur" className="py-16 md:py-24 bg-gray-50 font-outfit">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fitur Unggulan majoo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi lengkap untuk mengelola bisnis Anda dengan lebih efisien dan efektif.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<ShoppingBag className="h-12 w-12" />}
            title="Kasir & Pembayaran Digital"
            description="Terima pembayaran dengan cepat melalui berbagai metode seperti tunai, kartu, e-wallet (GoPay, OVO, ShopeePay) dan EDC bank ternama."
          />
          
          <FeatureCard 
            icon={<BarChart2 className="h-12 w-12" />}
            title="Manajemen Stok"
            description="Pantau stok secara real-time, atur stok minimum, dan dapatkan notifikasi otomatis saat persediaan hampir habis."
          />
          
          <FeatureCard 
            icon={<Users className="h-12 w-12" />}
            title="Kelola Karyawan & Shift"
            description="Atur jadwal shift karyawan, tetapkan target penjualan, dan pantau performa karyawan dari dashboard yang intuitif."
          />
          
          <FeatureCard 
            icon={<CreditCard className="h-12 w-12" />}
            title="Laporan Keuangan Otomatis"
            description="Dapatkan laporan penjualan, laba rugi, dan arus kas secara otomatis. Unduh dalam format XLS atau PDF untuk keperluan akuntansi."
          />
          
          <FeatureCard 
            icon={<Heart className="h-12 w-12" />}
            title="Loyalitas Pelanggan"
            description="Kelola database pelanggan, jalankan program loyalitas, dan kirim promosi ke pelanggan setia Anda."
          />
          
          <div className="bg-primary-50 p-6 rounded-lg border-2 border-primary-100 flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-center">Dan masih banyak fitur lainnya!</h3>
            <button 
              onClick={handleTrialClick} // Change to onClick handler
              className="inline-flex items-center px-6 py-3 bg-[#008080] text-white font-medium rounded-lg hover:bg-[#006666] transition-colors focus:outline-none focus:ring-2 focus:ring-[#008080] focus:ring-offset-2"
            >
              Daftar Free Trial Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>

    <LeadForm
      isOpen={showForm}
      onClose={() => setShowForm(false)}
      source={formType} // Will always be 'trial' here
      onSuccess={handleFormSuccess}
    />
    </>
  );
};

export default Features;