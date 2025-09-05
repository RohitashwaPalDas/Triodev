"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const AboutCTA = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();

  useGSAP(() => {
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Button animation after heading
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power1.in",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-16 text-center">
      <h2 ref={headingRef} className="text-2xl font-bold mb-4">
        Let’s Build Something Amazing Together
      </h2>
      <button
        ref={buttonRef}
        onClick={() => router.push("/contact")}
        className="inline-block px-8 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition duration-300"
      >
        Get in Touch
      </button>
    </section>
  );
};

export default AboutCTA;
