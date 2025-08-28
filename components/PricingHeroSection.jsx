import React from 'react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const PricingHeroSection = ({selectedPlan,selectedCategory}) => {
  return (
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
  )
}

export default PricingHeroSection
