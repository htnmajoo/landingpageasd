import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        {isOpen ? 
          <ChevronUp className="h-5 w-5 text-primary-600" /> : 
          <ChevronDown className="h-5 w-5 text-primary-600" />
        }
      </button>
      <div 
        className={`mt-2 text-gray-600 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="pb-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pertanyaan Umum</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beberapa pertanyaan yang sering ditanyakan tentang majoo.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <FAQItem 
            question="Apakah majoo gratis?"
            answer="majoo menyediakan free trial selama 14 hari untuk Anda mencoba semua fitur premium. Setelah masa trial berakhir, Anda dapat memilih paket berlangganan yang sesuai dengan kebutuhan bisnis Anda."
          />
          
          <FAQItem 
            question="Bisa digunakan untuk usaha kecil?"
            answer="Tentu saja! majoo dirancang khusus untuk UMKM dengan berbagai skala, mulai dari warung kecil hingga mini market. Paket yang kami sediakan juga beragam dan dapat disesuaikan dengan kebutuhan bisnis Anda."
          />
          
          <FAQItem 
            question="Apakah support-nya 24 jam?"
            answer="Ya, kami menyediakan dukungan pelanggan 24/7 melalui WhatsApp dan hotline telepon. Tim support kami siap membantu Anda menyelesaikan masalah kapan pun dibutuhkan."
          />
          
          <FAQItem 
            question="Apa saja metode pembayaran yang didukung?"
            answer="majoo mendukung berbagai metode pembayaran, termasuk tunai, kartu kredit/debit, QRIS, dan e-wallet populer seperti GoPay, DANA, dan OVO. Kami juga terintegrasi dengan EDC bank ternama di Indonesia."
          />
          
          <FAQItem 
            question="Bisakah majoo digunakan di berbagai perangkat?"
            answer="Ya, majoo tersedia dalam versi Android, iOS, dan Web. Anda dapat mengakses sistem dari smartphone, tablet, atau komputer, dan semua data akan tersinkronisasi secara real-time."
          />
          
          <FAQItem 
            question="Apakah majoo bisa terintegrasi dengan Food Online?"
            answer="Ya, majoo dapat terintegrasi dengan layanan food delivery populer seperti Go-Food dan Grab Food. Integrasi ini memudahkan Anda mengelola pesanan online dan offline dari satu dashboard."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;