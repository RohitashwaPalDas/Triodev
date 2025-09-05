"use client";
import { useSession} from "next-auth/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRouter } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

const PricingCTA = ({selectedPlan, selectedCategory}) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleStartPlan = () => {
    if (!session) {
      router.push("/auth");
    } else{
      router.push(`/contact?plan=${selectedPlan.name}&category=${selectedCategory.category}`);
    }

  };

  const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const paraRef = useRef(null);
    const buttonRef = useRef(null);
  
    useGSAP(() => {
      const items = [
        headingRef.current,
        paraRef.current,
        buttonRef.current,
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
          paraRef.current,
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
      ]);
  
      animMap.forEach((cfg, el) => gsap.set(el, cfg.from));
  
      ScrollTrigger.batch(items, {
        start: "top 90%",
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
    <section ref={sectionRef} className="w-full bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white py-16 px-6 md:px-12 lg:px-20 mt-20 rounded-3xl shadow-2xl mb-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 ref={headingRef} className="text-3xl md:text-4xl font-extrabold mb-4">
              Unlock the full potential of{" "}
              <span className="text-yellow-300">
                {selectedCategory.category}
              </span>
            </h2>
            <p ref={paraRef} className="text-lg text-indigo-100">
              Get started with the{" "}
              <span className="font-semibold">{selectedPlan.name}</span> plan
              today and supercharge your growth 🚀
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center md:justify-end flex-shrink-0">
            <button ref={buttonRef} onClick={handleStartPlan} className="px-10 py-5 bg-yellow-400 text-indigo-900 rounded-full font-semibold text-xl shadow-lg hover:shadow-yellow-300/50 hover:scale-110 transition-all">
              Start with {selectedPlan.name}
            </button>
          </div>
        </div>
      </section>
  )
}

export default PricingCTA
