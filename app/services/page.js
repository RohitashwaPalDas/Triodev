'use client';

import Pricing from "@/components/Pricing";
import WebDomains from "@/components/WebDomains";
import WebServices from "@/components/WebServices";
import React, { useState, useEffect } from "react";

import ServicesHeroSection from "@/components/ServicesHeroSection";
import ServicesCTA from "@/components/ServicesCTA";
import ScrollToTop from "@/components/ScrollToTop";


const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState("Website Development");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Or your loading component
  }

  return (
    <div>

      <ScrollToTop />

      <ServicesHeroSection />

      <WebDomains />

      <WebServices onSelect={(serviceTitle) => setSelectedService(serviceTitle)}
        selectedService={selectedService} />

      <Pricing selectedService={selectedService} />

      <ServicesCTA />

    </div>
  );
};

export default ServicesPage;
