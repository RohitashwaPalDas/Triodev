"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const PricingDetailClient = ({ selectedCategory, selectedPlan }) => {
  if (!selectedCategory) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold">
        ❌ Category not found.
      </div>
    );
  }

  if (!selectedPlan) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold">
        ❌ Plan not found.
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-12 rounded-xl shadow-2xl">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            {selectedPlan.name} Plan
          </h1>
          <p className="text-xl text-indigo-100 mb-8">
            Designed for{" "}
            <span className="font-semibold">{selectedCategory.category}</span>{" "}
            to help you achieve faster, smarter, and better results 🚀
          </p>
          <button className="px-8 py-4 rounded-full bg-white text-indigo-700 font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-all">
            Get Started Now
          </button>
        </div>

        {/* Illustration */}
        <div className="flex-1 flex justify-center">
          <DotLottieReact
            src="https://lottie.host/801ded38-6320-4ff1-8512-b20900d74fd1/BTg2m6iQzg.lottie"
            loop
            autoplay
            width={400}
            height={400}
            className="drop-shadow-2xl"
          />
        </div>
      </section>

      {/* PRICE HIGHLIGHT CARD */}
      <section className="max-w-4xl mx-auto -mt-16 mb-20 px-6">
        <div className="relative bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white rounded-3xl shadow-2xl p-12 backdrop-blur-xl border border-white/20 hover:scale-105 transition-transform">
          {/* Grid: single column on small, two columns on large */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center lg:text-left">
            {/* Left column */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Exclusive {selectedPlan.name} Package
              </h3>
              <p className="text-lg mb-3">
                Billing:{" "}
                <span className="font-medium text-yellow-300">
                  {selectedPlan.billing}
                </span>
              </p>
              <p className="text-xl">
                ⏱ Delivery in{" "}
                <strong className="text-green-300">
                  {selectedPlan.delivery}
                </strong>
              </p>
            </div>

            {/* Right column */}
            <div>
              <p className="text-6xl font-extrabold mb-6">
                ₹{selectedPlan.price}
              </p>
              <div className="mt-8">
                <button className="px-10 py-4 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all">
                  Choose {selectedPlan.name} 🚀
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE STYLE SECTIONS */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-indigo-200 hidden md:block z-0"></div>

          {sections.map((section, idx) => (
            <div
              key={idx}
              className={`mb-16 flex flex-col md:flex-row ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center md:items-start gap-10 relative z-10`}
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-100 shadow-lg text-3xl">
                {section.icon}
              </div>

              {/* Content */}
              <div className="flex-1 bg-white shadow-lg rounded-2xl p-8 hover:-translate-y-2 transition-transform">
                <h2 className={`text-2xl font-bold mb-6 ${section.color}`}>
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-700 text-lg"
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

      {/* FINAL CTA SECTION */}
      <section className="w-full bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white py-16 px-6 md:px-12 lg:px-20 mt-20 rounded-3xl shadow-2xl mb-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Unlock the full potential of{" "}
              <span className="text-yellow-300">
                {selectedCategory.category}
              </span>
            </h2>
            <p className="text-lg text-indigo-100">
              Get started with the{" "}
              <span className="font-semibold">{selectedPlan.name}</span> plan
              today and supercharge your growth 🚀
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center md:justify-end flex-shrink-0">
            <button className="px-10 py-5 bg-yellow-400 text-indigo-900 rounded-full font-semibold text-xl shadow-lg hover:shadow-yellow-300/50 hover:scale-110 transition-all">
              Start with {selectedPlan.name}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingDetailClient;
