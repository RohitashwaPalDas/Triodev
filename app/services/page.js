'use client';

import Pricing from "@/components/Pricing";
import WebDomains from "@/components/WebDomains";
import WebServices from "@/components/WebServices";
import React, { useState } from "react";

import ServicesHeroSection from "@/components/ServicesHeroSection";
import ServicesCTA from "@/components/ServicesCTA";
import ScrollToTop from "@/components/ScrollToTop";


const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState("Website Development");

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
