import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ServicesCTA = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      subHeadRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
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
    <section ref={sectionRef} className="py-16 text-center bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 text-gray-800 rounded-lg">
        <h2 ref={headingRef} className="text-2xl font-bold mb-4 text-blue-600">
          Ready to Start Your Project?
        </h2>
        <p ref={subHeadRef} className="max-w-2xl mx-auto mb-6">
          Whether you're a startup, small business, or growing enterprise, we’re here
          to bring your ideas to life. Let’s collaborate to build something truly
          remarkable for your audience.
        </p>
        <a ref={buttonRef}
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get in Touch
        </a>
      </section>
  )
}

export default ServicesCTA
