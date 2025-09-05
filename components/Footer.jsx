"use client";
import React, { useRef } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    const footer = footerRef.current;

    const cols = footer.querySelectorAll(".footer-col");
    const socials = footer.querySelectorAll(".footer-social a");

    // Footer container animation
    gsap.fromTo(
      footer,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
          toggleActions: "restart reverse restart reverse", // play on down, reverse on up
        },
      }
    );

    // Staggered columns
    gsap.fromTo(
      cols,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 85%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );

    // Social icons bounce in
    gsap.fromTo(
      socials,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: footer,
          start: "top 85%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
  }, { scope: footerRef });

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-r from-blue-500 via-sky-600 to-blue-700 text-white py-12 px-6 md:px-12 lg:px-20 mt-20 rounded-t-3xl shadow-inner"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div className="footer-col">
          <h2 className="text-2xl font-extrabold mb-3">TrioDev 🚀</h2>
          <p className="text-indigo-100 text-sm leading-relaxed">
            Empowering startups & businesses with custom web solutions. 
            We help you scale fast, with style & performance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-indigo-100 text-sm">
            <li><a href="/" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="/services" className="hover:text-yellow-300 transition">Services</a></li>
            <li><a href="/pricing" className="hover:text-yellow-300 transition">Pricing</a></li>
            <li><a href="/contact" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-indigo-100 text-sm">
            <li className="flex items-center gap-2">
              <MdEmail className="text-yellow-300 text-lg" /> airdev.web@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-yellow-300 text-lg" /> +91 62960 66177
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-yellow-300 text-lg" /> Kolkata, India
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-col">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="footer-social flex gap-4">
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-yellow-300 hover:text-indigo-900 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-yellow-300 hover:text-indigo-900 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-yellow-300 hover:text-indigo-900 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-yellow-300 hover:text-indigo-900 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-indigo-100">
        © {new Date().getFullYear()} TrioDev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
