import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const WorkHeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-sky-100 to-blue-50 grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto mb-24 relative z-10 rounded-lg shadow-lg p-8 md:p-16">

        {/* Left Side - Text */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">
            Our Works
          </h1>
          <p className="text-gray-700 mt-6 text-lg leading-relaxed max-w-lg">
            Discover some of our{" "}
            <span className="font-semibold text-indigo-600">most impactful projects</span>{" "}
            where creativity meets technology. We build solutions that inspire,
            engage, and make life easier.
          </p>

          {/* Call to Action */}
          <button className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-blue-700 transition">
            Start a Project <FaExternalLinkAlt size={16} />
          </button>
        </div>

        {/* Right Side - Illustration / Picture */}
        <div className="w-full flex justify-center md:justify-end">
          
          <DotLottieReact
            src="https://lottie.host/acc2a738-b345-47ad-86f2-1a0c9523038e/cYYG9AKovz.lottie"
            loop
            autoplay
            className="w-[80%] sm:w-[70%] md:w-[500px] lg:w-[600px] scale-125 sm:scale-150 mx-auto drop-shadow-lg"
          />
        </div>
      </div>
  )
}

export default WorkHeroSection
