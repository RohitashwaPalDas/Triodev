import React, { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaShoppingCart,
  FaCode,
  FaPencilRuler,
  FaSearch,
  FaWrench,
  FaMobileAlt,
  FaShieldAlt,
  FaServer,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const WebServices = ({ onSelect, selectedService }) => {
  const webServices = [
    {
      title: "Website Development",
      icon: <FaCode className="text-blue-500 text-4xl" />,
      desc: "Custom-built websites tailored to your needs — from simple static pages to complex dynamic platforms.",
    },
    {
      title: "UI/UX Design",
      icon: <FaPencilRuler className="text-purple-500 text-4xl" />,
      desc: "Pixel-perfect, user-focused designs that are both beautiful and easy to navigate.",
    },
    {
      title: "SEO Optimization",
      icon: <FaSearch className="text-green-500 text-4xl" />,
      desc: "Boost your search rankings with keyword research, on-page SEO, and speed optimization.",
    },
    {
      title: "Website Maintenance",
      icon: <FaWrench className="text-orange-500 text-4xl" />,
      desc: "Keep your site secure, updated, and running smoothly with our regular maintenance plans.",
    },
    {
      title: "E-commerce Solutions",
      icon: <FaShoppingCart className="text-pink-500 text-4xl" />,
      desc: "Sell online with secure payment integration, product management, and customer tracking.",
    },
    {
      title: "Mobile Responsive Design",
      icon: <FaMobileAlt className="text-cyan-500 text-4xl" />,
      desc: "Ensure your website looks stunning and works perfectly on all devices.",
    },
    {
      title: "Security & Backup",
      icon: <FaShieldAlt className="text-red-500 text-4xl" />,
      desc: "Protect your website with robust security measures and regular backups.",
    },
    {
      title: "Hosting & Domain Setup",
      icon: <FaServer className="text-yellow-500 text-4xl" />,
      desc: "Get your site online with reliable hosting and domain configuration assistance.",
    },
  ];

  const headingRef = useRef(null);
  const subHeadRef = useRef(null);
  const serviceRef = useRef([]);

  useGSAP(() => {
  // Heading animation
  gsap.from(headingRef.current, {
    scale: 0.6,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: headingRef.current,
      start: "top 80%",
      toggleActions: "restart reverse restart reverse",
    },
  });

  gsap.from(subHeadRef.current, {
    scale: 0.6,
    opacity: 0,
    duration: 0.8,
    delay:0.2,
    scrollTrigger: {
      trigger: subHeadRef.current,
      start: "top 80%",
      toggleActions: "restart reverse restart reverse",
    },
  });

  gsap.set(serviceRef.current, { opacity: 0, scale: 0.4 });

  // Cards batch animation with fromTo
  ScrollTrigger.batch(serviceRef.current, {
    start: "top 80%",
    end: "bottom 15%",
    onEnter: (batch) =>
      gsap.fromTo(
        batch,
        { scale: 0.4, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          overwrite: "auto",
        }
      ),
    onLeave: (batch) =>
      gsap.fromTo(
        batch,
        { scale: 1, opacity: 1 },
        {
          scale: 0.4,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
          overwrite: "auto",
        }
      ),
    onEnterBack: (batch) =>
      gsap.fromTo(
        batch,
        { scale: 0.4, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          overwrite: "auto",
        }
      ),
    onLeaveBack: (batch) =>
      gsap.fromTo(
        batch,
        { scale: 1, opacity: 1 },
        {
          scale: 0.4,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
          overwrite: "auto",
        }
      ),
  });
}, []);


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 ref={headingRef} className="text-4xl font-bold text-center mb-4 text-blue-600">
          Our Web Services
        </h2>
        <p ref={subHeadRef} className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          We offer end-to-end digital solutions to help your business thrive
          online. From design to deployment and beyond, we've got you covered.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {webServices.map((service, index) => (
            <div
              key={index}
              ref={(el) => (serviceRef.current[index] = el)}
              className={`p-6 rounded-lg shadow-lg cursor-pointer transition ${
                selectedService === service.title
                  ? "bg-blue-50"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
              onClick={() => onSelect(service.title)}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebServices;
