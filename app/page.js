'use client';
import CTA from '@/components/CTA';
import Features from '@/components/Features';
import HeroSection from '@/components/HeroSection';
import ScrollToTop from '@/components/ScrollToTop';
import React from 'react';



const Home = () => {

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <ScrollToTop/>
      <HeroSection />

      <Features />

      <CTA />

    </main>
  );
};

export default Home;
