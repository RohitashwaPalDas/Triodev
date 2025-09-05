"use client";
import { useSession } from "next-auth/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

gsap.registerPlugin(ScrollTrigger);

const PricingHeroSection = ({ selectedPlan, selectedCategory }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const lottieRef = useRef(null);

  useGSAP(() => {
    const items = [
      headingRef.current,
      lottieRef.current,
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
        lottieRef.current,
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

  const handleStartPlan = () => {
    if (!session) {
      router.push("/auth");
    } else {
      router.push(
        `/contact?plan=${selectedPlan.name}&category=${selectedCategory.category}`
      );
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-12 rounded-xl shadow-2xl">
      {/* Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 ref={headingRef} className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          {selectedPlan.name} Plan
        </h1>
        <p ref={paraRef} className="text-xl text-indigo-100 mb-8">
          Designed for{" "}
          <span className="font-semibold">{selectedCategory.category}</span> to
          help you achieve faster, smarter, and better results 🚀
        </p>
        <button
        ref={buttonRef}
          onClick={handleStartPlan}
          className="px-8 py-4 rounded-full bg-white text-indigo-700 font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-all"
        >
          Get Started Now
        </button>
      </div>

      {/* Illustration */}
      <div ref={lottieRef} className="flex-1 flex justify-center">
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
  );
};

export default PricingHeroSection;
