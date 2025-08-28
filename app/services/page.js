'use client';

import Pricing from "@/components/Pricing";
import WebDomains from "@/components/WebDomains";
import WebServices from "@/components/WebServices";
import React, { useState } from "react";

import ServicesHeroSection from "@/components/ServicesHeroSection";
import ServicesCTA from "@/components/ServicesCTA";
import ScrollToTop from "@/components/ScrollToTop";


const ServicesPage = () => {
  

  return (
    <div>

      <ScrollToTop />

      <ServicesHeroSection />

      

      <WebServices/>

      <Pricing/>

      <ServicesCTA />

    </div>
  );
};

export default ServicesPage;
