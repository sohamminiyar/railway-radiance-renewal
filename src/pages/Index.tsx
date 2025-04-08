
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PopularDestinations from '@/components/PopularDestinations';
import Services from '@/components/Services';
import PromotionsSection from '@/components/PromotionsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <PopularDestinations />
        <Services />
        <PromotionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
