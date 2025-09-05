"use client";
import { useSession } from "next-auth/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

gsap.registerPlugin(ScrollTrigger);

const PriceHighlight = ({ selectedPlan, selectedCategory }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleStartPlan = () => {
    if (!session) {
      router.push("/auth");
    } else {
      router.push(
        `/contact?plan=${selectedPlan.name}&category=${selectedCategory.category}`
      );
    }
  };

  const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const para1Ref = useRef(null);
    const para2Ref = useRef(null);
    const buttonRef = useRef(null);
    const pricingRef = useRef(null);
  
    useGSAP(() => {
      const items = [
        headingRef.current,
        para1Ref.current,
        para2Ref.current,
        buttonRef.current,
        pricingRef.current,
      ].filter(Boolean);
  
      const animMap = new Map([
        [
          headingRef.current,
          {
            from: { x: -100, opacity: 0 },
            to: { x: 0, opacity: 1, duration: 0.8 },
          },
        ],
        [
          para1Ref.current,
          {
            from: { x: -100, opacity: 0 },
            to: { x: 0, opacity: 1, duration: 0.8 },
          },
        ],
        [
          para2Ref.current,
          {
            from: { x: 100, opacity: 0 },
            to: { x: 0, opacity: 1, duration: 0.8 },
          },
        ],
        [
          buttonRef.current,
          {
            from: { scale: 0.6, opacity: 0 },
            to: { scale: 1, opacity: 1, duration: 0.8 },
          },
        ],
        [
          pricingRef.current,
          {
            from: { scale: 0.6, opacity: 0 },
            to: { scale: 1, opacity: 1, duration: 0.8 },
          },
        ],
      ]);
  
      animMap.forEach((cfg, el) => gsap.set(el, cfg.from));
  
      ScrollTrigger.batch(items, {
        start: "top 95%",
        end: "bottom 10%",
        onEnter: (batch) => {
          batch.forEach((el, i) => {
            const cfg = animMap.get(el);
            if (!cfg) return;
            gsap.fromTo(el, cfg.from, {
              ...cfg.to,
              delay: i * 0.3,
              overwrite: "auto",
            });
          });
        },
  
        onEnterBack: (batch) => {
          batch.forEach((el, i) => {
            const cfg = animMap.get(el);
            if (!cfg) return;
            gsap.fromTo(el, cfg.from, {
              ...cfg.to,
              delay: i * 0.3,
              overwrite: "auto",
            });
          });
        },
  
        onLeave: (batch) => {
          batch.forEach((el, i) => {
            const cfg = animMap.get(el);
            if (!cfg) return;
            gsap.to(el, {
              ...cfg.from,
              duration: 0.6,
              delay: i * 0.2,
              overwrite: "auto",
            });
          });
        },
  
        onLeaveBack: (batch) => {
          batch.forEach((el, i) => {
            const cfg = animMap.get(el);
            if (!cfg) return;
            gsap.to(el, {
              ...cfg.from,
              duration: 0.6,
              delay: i * 0.2,
              overwrite: "auto",
            });
          });
        },
      });
    }, []);

  return (
    <section ref={sectionRef} className="max-w-4xl mx-auto -mt-16 mb-20 px-6">
      <div className="relative bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white rounded-3xl shadow-2xl p-12 backdrop-blur-xl border border-white/20 hover:scale-105 transition-transform">
        {/* Grid: single column on small, two columns on large */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center lg:text-left">
          {/* Left column */}
          <div>
            <h3 ref={headingRef} className="text-2xl font-semibold mb-4">
              Exclusive {selectedPlan.name} Package
            </h3>
            <p ref={para1Ref} className="text-lg mb-3">
              Billing:{" "}
              <span className="font-medium text-yellow-300">
                {selectedPlan.billing}
              </span>
            </p>
            <p ref={para2Ref} className="text-xl">
              ⏱ Delivery in{" "}
              <strong className="text-green-300">
                {selectedPlan.delivery}
              </strong>
            </p>
          </div>

          {/* Right column */}
          <div>
            <p ref={pricingRef} className="text-6xl font-extrabold mb-6">
              ₹{selectedPlan.price}
            </p>
            <div className="mt-8">
              <button
                ref={buttonRef}
                onClick={handleStartPlan}
                className="px-10 py-4 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all"
              >
                Choose {selectedPlan.name} 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceHighlight;
