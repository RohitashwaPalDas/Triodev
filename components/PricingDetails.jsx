import React from 'react'

const PricingDetails = ({selectedPlan}) => {
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
  )
}

export default PricingDetails
