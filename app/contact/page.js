"use client";

import React from "react";

import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import ContactLeft from "@/components/ContactLeft";
import ContactRight from "@/components/ContactRight";
import ScrollToTop from "@/components/ScrollToTop";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-800 flex items-center justify-center p-8">
      <ScrollToTop/>
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">

        <ContactLeft/>

        <ContactRight/>
        
      </div>

      <FloatingWhatsapp />

    </div>
  );
};

export default ContactPage;
