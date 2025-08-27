import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
import pricingData from "@/data/pricingData";
import webServices from "@/data/webServices";

const Pricing = ({}) => {
  const headingRef = useRef(null);
  const cardRef = useRef([]);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedService, setSelectedService] = useState("Website Development");

  const checkScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 200; // how much to slide per click
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScroll();
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  useGSAP(() => {
    // Heading animation
    gsap.from(headingRef.current, {
      scale: 0.6,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Cards animation with batching for one-by-one appearance
    const cards = cardRef.current.filter(Boolean); // ensure all elements exist
    gsap.set(cards, { x: 100, opacity: 0 }); // initial state

    ScrollTrigger.batch(cards, {
      start: "top 85%",
      end: "bottom 20%",
      interval: 0.1, // group quickly appearing cards
      batchMax: 4, // max cards per batch
      onEnter: (batch) =>
        gsap.to(batch, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        }),
      onLeave: (batch) => gsap.set(batch, { x: 100, opacity: 0 }),
      onLeaveBack: (batch) => gsap.set(batch, { x: 100, opacity: 0 }),
    });
  }, []);

  const selectedCategory = pricingData.find(
    (service) => service.category === selectedService
  );

  if (!selectedCategory) return null;

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          ref={headingRef}
          className="text-4xl font-bold text-center mb-4 text-blue-600"
        >
          Pricing for {selectedCategory.category}
        </h2>
        <div className="relative w-full flex items-center">
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 bg-transparent hover:bg-blue-50"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
      )}

      {/* Scrollable List */}
      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide-x scroll-smooth w-full px-10 py-2"
      >
        {webServices.map((service, idx) => (
          <span
            key={idx}
            className={`flex-shrink-0 px-4 py-2 shadow-sm rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition  ${
                  selectedService === service.title
                    ? "bg-blue-100"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
            onClick={() => setSelectedService(service.title)}
          >
            {service.title}
          </span>
        ))}
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 bg-transparent hover:bg-blue-50"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      )}
    </div>
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {selectedCategory.plans.map((plan, idx) => (
            <Link
              key={idx}
              ref={(el) => (cardRef.current[idx] = el)}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border-t-4 border-blue-500"
              href={`/pricing/${selectedCategory.category
                .toLowerCase()
                .replace(/\s+/g, "-")}/${plan.name.toLowerCase()}`}
            >
              <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
              <p className="text-3xl font-bold text-blue-600">₹{plan.price}</p>
              <p className="text-sm text-gray-500 mb-4">{plan.billing}</p>
              <ul className="space-y-2 mb-4">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" /> {feature}
                  </li>
                ))}
              </ul>
              <p className="font-medium">Delivery: {plan.delivery}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
