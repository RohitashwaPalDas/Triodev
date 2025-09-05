import React, { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const ServicesHeroSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const lottieRef = useRef(null);
  const router = useRouter();
  

  useGSAP(() => {
    const items = [
      headingRef.current,
      lottieRef.current,
      paraRef.current,
      button1Ref.current,
      button2Ref.current,
    ].filter(Boolean);

    const animMap = new Map([
      [headingRef.current, { from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration: 0.8 } }],
      [lottieRef.current,  { from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration: 0.8 } }],
      [paraRef.current,    { from: { x: 100, opacity: 0 }, to: { x: 0, opacity: 1, duration: 0.8 } }],
      [button1Ref.current, { from: { scale: 0.6, opacity: 0 }, to: { scale: 1, opacity: 1, duration: 0.8 } }],
      [button2Ref.current, { from: { scale: 0.6, opacity: 0 }, to: { scale: 1, opacity: 1, duration: 0.8 } }],
    ]);

    animMap.forEach((cfg, el) => gsap.set(el, cfg.from));

    ScrollTrigger.batch(items, {
      start: "top 90%",
      end: "bottom 10%",
      onEnter: (batch) => {
        batch.forEach((el, i) => {
          const cfg = animMap.get(el);
          if (!cfg) return;
          gsap.fromTo(
            el,
            cfg.from,
            { ...cfg.to, delay: i * 0.3, overwrite: "auto" } 
          );
        });
      },

      onEnterBack: (batch) => {
        batch.forEach((el, i) => {
          const cfg = animMap.get(el);
          if (!cfg) return;
          gsap.fromTo(
            el,
            cfg.from,
            { ...cfg.to, delay: i * 0.3, overwrite: "auto" }
          );
        });
      },

      onLeave: (batch) => {
        batch.forEach((el, i) => {
          const cfg = animMap.get(el);
          if (!cfg) return;
          gsap.to(el, { ...cfg.from, duration: 0.6, delay: i * 0.2, overwrite: "auto" });
        });
      },

      onLeaveBack: (batch) => {
        batch.forEach((el, i) => {
          const cfg = animMap.get(el);
          if (!cfg) return;
          gsap.to(el, { ...cfg.from, duration: 0.6, delay: i * 0.2, overwrite: "auto" });
        });
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-r from-blue-100 via-sky-200 to-blue-200 text-gray-800 overflow-hidden rounded-lg"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white,transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h1
            ref={headingRef}
            className="text-4xl lg:text-5xl font-extrabold leading-tight text-blue-600"
          >
            We Build Websites that Build Your Business
          </h1>
          <p ref={paraRef} className="text-lg lg:text-xl text-black">
            From local shops to global platforms,{" "}
            <span className="orbitron text-blue-600 font-bold">TrioDev</span>{" "}
            crafts custom websites that not only look stunning but also deliver
            results — helping your brand grow, engage customers, and stand out
            in the digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={()=>router.push("/contact")}
              ref={button1Ref}
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Start Your Project
            </button>
            <a
              href="#services"
              ref={button2Ref}
              className="px-6 py-3 border border-black font-semibold rounded-full hover:bg-white hover:border-white hover:text-blue-600 transition duration-300"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="flex justify-center md:justify-end">
          <div ref={lottieRef} className="w-full max-w-lg lg:max-w-2xl">
            <DotLottieReact
              src="https://lottie.host/1708fa78-5b93-4a50-9048-ff3d06bfbaa1/Mn1qYyuBov.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
