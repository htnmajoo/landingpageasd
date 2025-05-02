import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  business: string;
  quote: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, business, quote, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
          loading="lazy"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-600 text-sm">{business}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700">"{quote}"</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonial" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Pemilik Usaha</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ribuan pelaku UMKM di Indonesia telah menggunakan majoo untuk meningkatkan efisiensi bisnis mereka.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            name="Budi Santoso"
            business="Warung Kopi Budi, Jakarta"
            quote="Sejak pakai majoo, pengaturan stok dan laporan keuangan jadi lebih mudah. Pelanggan juga senang karena pembayarannya beragam."
            image="https://images.pexels.com/photos/31847713/pexels-photo-31847713/free-photo-of-young-man-with-balloon-in-urban-park-setting.jpeg??auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          
          <Testimonial 
            name="Siti Rahayu"
            business="Toko Kelontong Berkah, Tangerang"
            quote="Dulu sering kehilangan barang karena stok tidak terdata dengan baik. Sekarang dengan majoo semua jadi teratur dan tidak ada lagi barang yang hilang."
            image="https://images.pexels.com/photos/8615638/pexels-photo-8615638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          
          <Testimonial 
            name="Ahmad Hidayat"
            business="Barber Shop Modern, Bekasi"
            quote="Customer service majoo sangat responsif. Setiap ada pertanyaan langsung dibantu. Fitur manajemen karyawan sangat membantu bisnis saya."
            image="https://images.pexels.com/photos/12590424/pexels-photo-12590424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        
        <div className="mt-16 py-6 bg-primary-50 rounded-lg">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Partner Pembayaran Digital</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 px-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/archive/8/86/20210529064535%21Gopay_logo.svg"
                  alt="GoPay"
                  className="h-8 w-auto"
                  loading="lazy"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg"
                  alt="DANA"
                  className="h-8 w-auto"
                  loading="lazy"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img 
                  src="https://www.bca.co.id/-/media/Feature/Card/List-Card/Tentang-BCA/Brand-Assets/Logo-BCA/Logo-BCA_Biru.png"
                  alt="BCA"
                  className="h-8 w-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;