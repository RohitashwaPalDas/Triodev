import React, { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import {useRouter} from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const WorkHeroSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const lottieRef = useRef(null);
  const router = useRouter();
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
  return (
    <div ref={sectionRef} className="bg-gradient-to-r from-blue-100 via-sky-100 to-blue-50 grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto mb-24 relative z-10 rounded-lg shadow-lg p-8 md:p-16">
      {/* Left Side - Text */}
      <div className="text-center md:text-left">
        <h1 ref={headingRef} className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">
          Our Works
        </h1>
        <p ref={paraRef} className="text-gray-700 mt-6 text-lg leading-relaxed max-w-lg">
          Discover some of our{" "}
          <span className="font-semibold text-indigo-600">
            most impactful projects
          </span>{" "}
          where creativity meets technology. We build solutions that inspire,
          engage, and make life easier.
        </p>

        {/* Call to Action */}
        <button onClick={()=>router.push("/contact")} ref={buttonRef} className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-blue-700 transition">
          Start a Project <FaExternalLinkAlt size={16} />
        </button>
      </div>

      {/* Right Side - Illustration / Picture */}
      <div ref={lottieRef} className="w-full flex justify-center md:justify-end">
        <DotLottieReact
          src="https://lottie.host/acc2a738-b345-47ad-86f2-1a0c9523038e/cYYG9AKovz.lottie"
          loop
          autoplay
          className="w-[80%] sm:w-[70%] md:w-[500px] lg:w-[600px] scale-125 sm:scale-150 mx-auto drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default WorkHeroSection;
