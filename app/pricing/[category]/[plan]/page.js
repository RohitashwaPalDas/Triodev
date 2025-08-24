import PricingDetailClient from "./PricingDetailClient";
import pricingData from "@/data/pricingData";


export default async function PricingDetail({ params }) {
  const { category, plan } = await params;

  const decode = (str) =>
    decodeURIComponent(str).replace(/-/g, " ").toLowerCase();

  const categoryName = decode(category);
  const planName = decode(plan);

  // Find matching category
  const selectedCategory = pricingData.find(
    (c) => c.category.toLowerCase() === categoryName
  );

  console.log("Selected Category:", selectedCategory);

  // Find matching plan
  const selectedPlan = selectedCategory.plans.find(
    (p) => p.name.toLowerCase() === planName
  );

  
  console.log("Selected Plan:", selectedPlan);

  return (
    <PricingDetailClient
      selectedCategory={selectedCategory}
      selectedPlan={selectedPlan}
    />
  );

  
  
}
