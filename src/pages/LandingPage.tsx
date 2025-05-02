import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const LandingPage: React.FC = () => {
  return (
    <>
      <SEOHead />
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;