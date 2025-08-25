"use client";

import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ProjectDetailsClient = ({ selectedProject }) => {
  const [activeImage, setActiveImage] = useState(selectedProject.img[0]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-gray-900 py-2 px-4 md:px-12 md:py-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Title & Description */}
        <div className="relative w-full bg-gradient-to-r from-blue-50 via-sky-100 to-blue-50 rounded-3xl shadow-lg p-10 md:p-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
            {/* Animation */}
            <div className="w-full md:w-1/2 flex justify-center">
              <DotLottieReact
                src={selectedProject.animation}
                loop
                autoplay
                width={400}
                height={400}
                className="drop-shadow-2xl"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-blue-500 bg-clip-text text-transparent">
                  {selectedProject.title}
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Image Section */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Active Image */}
          <div className="w-full md:w-5/6">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={activeImage}
                alt="Active"
                className="
          w-full 
          h-[10rem] sm:h-[24rem] md:h-[32rem] 
          object-cover 
          transform hover:scale-105 transition duration-500
        "
              />
            </div>
          </div>

          {/* Image Thumbnails */}
          <div className="w-full md:w-1/6">
            <div
              className="
        flex gap-4
        overflow-x-auto md:overflow-y-auto
        md:flex-col
        max-h-[32rem]
        pr-2
        scrollbar-thin scrollbar-thumb-blue-500/70 scrollbar-track-transparent
      "
            >
              {selectedProject.img.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden rounded-xl shadow cursor-pointer border-2 transition duration-300 ${
                    activeImage === image
                      ? "border-blue-600"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveImage(image)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail-${index}`}
                    className="w-28 h-20 md:w-full md:h-28 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
<div className="relative bg-gradient-to-r from-blue-50 via-sky-50 to-blue-100 rounded-3xl p-10 shadow-lg">
  <h2 className="text-3xl font-bold mb-10 text-blue-800 flex items-center gap-3">
    <span className="text-4xl">⚙️</span> Tech Stack
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {selectedProject.techStack.map((tech, index) => (
      <div
        key={index}
        className="group flex items-center justify-center px-6 py-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105 border border-blue-100"
      >
        <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition">
          {tech}
        </span>
      </div>
    ))}
  </div>

  {/* Decorative gradient glow */}
  <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-300/30 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-sky-300/30 rounded-full blur-3xl"></div>
</div>


        {/* Features */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-blue-800 flex items-center gap-3">
            <span className="text-4xl">🎵</span> Features
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {selectedProject.features.map((feature, index) => (
              <li
                key={index}
                className="p-6 bg-white border border-blue-100 rounded-xl shadow hover:shadow-xl transition duration-300"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Business Value */}
        <div className="bg-gradient-to-r from-blue-50 to-white shadow-lg rounded-3xl p-10 border border-blue-100">
          <h2 className="text-3xl font-bold mb-6 text-blue-800 flex items-center gap-3">
            <span className="text-4xl">💼</span> Business Value
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {selectedProject.businessValue}
          </p>
        </div>

        {/* Reliability */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-blue-800 flex items-center gap-3">
            <span className="text-4xl">🔒</span> Reliability
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {selectedProject.reliability.map((point, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-2xl shadow hover:shadow-xl transition duration-300"
              >
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Impact */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-blue-800 flex items-center gap-3">
            <span className="text-4xl">🌟</span> Client Impact
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {selectedProject.clientImpact.map((impact, index) => (
              <li
                key={index}
                className="bg-white border border-blue-100 rounded-2xl p-6 shadow hover:shadow-xl transition duration-300"
              >
                {impact}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 justify-center mt-12">
          <a
            href={selectedProject.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-700 hover:scale-105 transition transform duration-300"
          >
            🚀 Live Demo
          </a>
          <a
            href={selectedProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:bg-gray-800 hover:scale-105 transition transform duration-300"
          >
            💻 View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsClient;
