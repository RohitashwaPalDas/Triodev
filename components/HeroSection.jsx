"use client";
import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const iframeRef = useRef(null);
  const router = useRouter();

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {duration: 0.8, delay: 0.2 },
    });

    tl.from(headingRef.current, { y: 30, opacity: 0 })

      // Paragraph: Fade-in with subtle upward motion and scale
      .from(paragraphRef.current, { y: 20, opacity: 0, scale: 0.95 }, "-=0.6")

      
      .fromTo(
        buttonRef.current,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power1.in", 
        },
        "-=0.4"
      )

      // Iframe
      .from(iframeRef.current, { x: 50, opacity: 0 }, "-=0.8");
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 text-black py-12 px-6 rounded-xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left max-w-xl mt-10 lg:mt-0">
          <h1
            ref={headingRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-6 leading-tight"
          >
            <span>Welcome to </span>
            <span className="text-blue-600 orbitron">
              <Typewriter
                words={["TrioDev"]}
                loop={true}
                cursor
                cursorStyle=""
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p
            ref={paragraphRef}
            className="text-lg sm:text-2xl font-semibold mb-8"
          >
            We build modern, responsive, and high-performance websites for
            businesses.
          </p>
          <button
            ref={buttonRef}
            onClick={() => router.push("/services")}
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-6 py-4 rounded-md transition cursor-pointer text-xl"
          >
            Get Started
          </button>
        </div>

        <div className="w-full max-w-[500px]" ref={iframeRef}>
          <iframe
            src="https://lottie.host/embed/7830b6c9-2c92-49d1-8a1a-0f9fc1e25d30/fuYTgWYMb2.lottie"
            className="w-[80vw] h-[40vh] sm:w-[60vw] sm:h-[50vh] md:w-[40vw] md:h-[60vh] lg:w-[40vw] lg:h-[70vh]"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
