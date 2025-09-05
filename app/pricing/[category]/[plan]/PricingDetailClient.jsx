"use client";

import React from "react";
import PricingHeroSection from "@/components/PricingHeroSection";
import PriceHighlight from "@/components/PriceHighlight";
import PricingDetails from "@/components/PricingDetails";
import PricingCTA from "@/components/PricingCTA";

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

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col">
      <PricingHeroSection selectedPlan={selectedPlan} selectedCategory={selectedCategory}/>

      <PriceHighlight selectedPlan={selectedPlan} selectedCategory={selectedCategory}/>

      <PricingDetails selectedPlan={selectedPlan} />

      <PricingCTA selectedPlan={selectedPlan} selectedCategory={selectedCategory}/>
    </div>
  );
};

export default PricingDetailClient;
