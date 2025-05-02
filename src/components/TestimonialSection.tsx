import React from 'react';
import { Youtube } from 'lucide-react';

/**
 * Komponen TestimonialSection untuk menampilkan testimonial video dan logo franchise
 * @returns JSX element
 */
const TestimonialSection = () => {
  const franchiseLogos = [
    'https://portal-gcs-cdn.majoo.id/v2/logo/user/logo-burger-bangor.png',
    'https://portal-gcs-cdn.majoo.id/v2/logo/user/logo-popcorn.png',
    'https://portal-gcs-cdn.majoo.id/v2/logo/user/logo-hotdog-booth.png',
    'https://portal-gcs-cdn.majoo.id/v2/logo/user/smooch.png',
    'https://portal-gcs-cdn.majoo.id/v2/logo/user/5asec.png',
    'https://portal-gcs-cdn.majoo.id/v2/logo/user/koi-teppanyaki.png'
  ];

  return (
    <section id="testimonial" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa kata mereka tentang majoo</h2>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-xl">
            <iframe 
              width="100%" 
              height="100%"
              src="https://www.youtube.com/embed/btlLfVkoj3g" 
              title="Testimonial majoo"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {franchiseLogos.map((logo, index) => (
            <div key={index} className="w-24 md:w-32 h-24 md:h-32 flex items-center">
              <img 
                src={logo} 
                alt={`Logo Franchise ${index + 1}`} 
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;