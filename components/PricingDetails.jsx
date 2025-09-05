"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PricingDetails = ({ selectedPlan }) => {
  const containerRef = useRef(null);

  const sections = [
    selectedPlan.features?.length && {
      title: "✨ Features",
      color: "text-blue-600",
      icon: "✔",
      iconColor: "text-green-500",
      items: selectedPlan.features,
    },
    selectedPlan.advantages?.length && {
      title: "🚀 Advantages",
      color: "text-purple-600",
      icon: "⭐",
      iconColor: "text-blue-500",
      items: selectedPlan.advantages,
    },
    selectedPlan.extraDetails?.length && {
      title: "📌 Extra Details",
      color: "text-green-600",
      icon: "🔹",
      iconColor: "text-purple-500",
      items: selectedPlan.extraDetails,
    },
  ].filter(Boolean);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".pricing-section");

      cards.forEach((card) => {
        const icon = card.querySelector(".pricing-icon");
        const content = card.querySelector(".pricing-content");
        const items = card.querySelectorAll(".pricing-item");

        // Icon animation
        gsap.fromTo(
          icon,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "restart reverse restart reverse", 
            },
          }
        );

        // Card container animation
        gsap.fromTo(
          content,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "restart reverse restart reverse",
            },
          }
        );

        // Stagger list items
        gsap.fromTo(
          items,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.15,
            delay: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "restart reverse restart reverse",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="max-w-5xl mx-auto px-6">
      <div className="relative">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`pricing-section mb-16 flex flex-col md:flex-row ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center md:items-start gap-10 relative z-10`}
          >
            {/* Icon Circle */}
            <div className="pricing-icon w-20 h-20 flex items-center justify-center rounded-full bg-indigo-100 shadow-lg text-3xl">
              {section.icon}
            </div>

            {/* Content */}
            <div className="pricing-content flex-1 bg-white shadow-lg rounded-2xl p-8 hover:-translate-y-2 transition-transform">
              <h2 className={`text-2xl font-bold mb-6 ${section.color}`}>
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="pricing-item flex items-start gap-3 text-gray-700 text-lg"
                  >
                    <span className={`${section.iconColor} text-xl`}>
                      {section.icon}
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingDetails;
