import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead: React.FC = () => {
  return (
    <Helmet>
      <title>Aplikasi Kasir UMKM Terbaik di Jabodetabek | Majoo POS</title>
      <meta name="description" content="Majoo adalah aplikasi kasir (POS) lengkap untuk UMKM. Kelola stok, keuangan, dan karyawan dari satu aplikasi. Daftar free trial sekarang & chat langsung via WhatsApp." />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://majoo.id/" />
      <meta property="og:title" content="Aplikasi Kasir UMKM Terbaik di Jabodetabek | Majoo POS" />
      <meta property="og:description" content="Majoo adalah aplikasi kasir (POS) lengkap untuk UMKM. Kelola stok, keuangan, dan karyawan dari satu aplikasi." />
      <meta property="og:image" content="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://majoo.id/" />
      <meta property="twitter:title" content="Aplikasi Kasir UMKM Terbaik di Jabodetabek | Majoo POS" />
      <meta property="twitter:description" content="Majoo adalah aplikasi kasir (POS) lengkap untuk UMKM. Kelola stok, keuangan, dan karyawan dari satu aplikasi." />
      <meta property="twitter:image" content="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      
      {/* Schema.org markup for Google */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Majoo",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Android, iOS, Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "IDR",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "2500"
          }
        }
      `}</script>
      
      {/* Additional Meta Tags */}
      <meta name="keywords" content="aplikasi kasir online, software kasir UMKM, POS system Indonesia, aplikasi kasir Jabodetabek, aplikasi kasir terbaik 2025" />
      <meta name="author" content="Majoo Indonesia" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Indonesian" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://majoo.id/" />
      
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet" />
    </Helmet>
  );
};

export default SEOHead;