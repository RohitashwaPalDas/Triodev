import React, { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectTitle = ({ selectedProject }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const lottieRef = useRef(null);
  useGSAP(() => {
    const items = [
      headingRef.current,
      lottieRef.current,
      paraRef.current,
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
    <div ref={sectionRef} className="relative w-full bg-gradient-to-r from-blue-50 via-sky-100 to-blue-50 rounded-3xl shadow-lg p-10 md:p-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
        {/* Animation */}
        <div ref={lottieRef} className="w-full md:w-1/2 flex justify-center">
          <DotLottieReact
            src={selectedProject.animation}
            loop
            autoplay
            width={400}
            height={400}
            className="drop-shadow-2xl"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 ref={headingRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-blue-500 bg-clip-text text-transparent">
              {selectedProject.title}
            </span>
          </h1>
          <p ref={paraRef} className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
            {selectedProject.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectTitle;
