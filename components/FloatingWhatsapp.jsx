import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsapp = () => {
  return (
    <div className="fixed bottom-6 right-6">
      <a
        href="https://wa.me/1234567890" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-lg 
                   hover:scale-110 transition-transform duration-300 animate-none"
      >
        <FaWhatsapp size={28} />

        {/* Tooltip */}
        <span
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded 
                     opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 
                     transition-all duration-300 ease-out whitespace-nowrap pointer-events-none"
        >
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default FloatingWhatsapp;
