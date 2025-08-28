import React from 'react'

const PriceHighlight = ({selectedPlan}) => {
  return (
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
  )
}

export default PriceHighlight
