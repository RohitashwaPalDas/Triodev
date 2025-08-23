import pricingData from "@/data/pricingData";
import Image from "next/image";

export default async function PricingDetail({ params }) {
  const { category, plan } = await params;

  const decode = (str) =>
    decodeURIComponent(str)
      .replace(/-/g, " ")
      .toLowerCase();

  const categoryName = decode(category);
  const planName = decode(plan);

  // Find matching category
  const selectedCategory = pricingData.find(
    (c) => c.category.toLowerCase() === categoryName
  );

  if (!selectedCategory) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold">
        ❌ Category not found.
      </div>
    );
  }

  // Find matching plan
  const selectedPlan = selectedCategory.plans.find(
    (p) => p.name.toLowerCase() === planName
  );

  if (!selectedPlan) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold">
        ❌ Plan not found.
      </div>
    );
  }

  // Collect sections dynamically
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
  ].filter(Boolean); // remove null/false sections

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
          {selectedPlan.name} Plan
        </h1>
        <p className="text-xl text-gray-600">
          for <span className="font-semibold">{selectedCategory.category}</span>
        </p>
      </div>

      {/* Price & Delivery */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg mb-16 text-center hover:scale-105 transition-transform duration-300">
        <p className="text-2xl text-gray-800 mb-3">
          <strong>💰 Price:</strong> ₹{selectedPlan.price}{" "}
          <span className="text-sm text-gray-500">({selectedPlan.billing})</span>
        </p>
        <p className="text-xl text-gray-800">
          <strong>⏱ Delivery:</strong> {selectedPlan.delivery}
        </p>
      </div>

      {/* Dynamic Grid Layout */}
      <div
        className={`max-w-6xl mx-auto grid gap-10 ${
          sections.length === 1
            ? "md:grid-cols-1"
            : sections.length === 2
            ? "md:grid-cols-2"
            : "md:grid-cols-3"
        }`}
      >
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all"
          >
            <h2 className={`text-2xl font-semibold mb-4 ${section.color}`}>
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-700 text-lg hover:translate-x-2 transition-transform"
                >
                  <span className={section.iconColor}>{section.icon}</span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg shadow-lg hover:scale-110 transition-transform animate-pulse">
          Get Started 🚀
        </button>
      </div>
    </div>
  );
}
