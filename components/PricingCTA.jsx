import React from 'react'

const PricingCTA = ({selectedPlan, selectedCategory}) => {
  return (
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
  )
}

export default PricingCTA
