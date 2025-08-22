import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);
  const heading2Ref = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  useGSAP(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        //markers: true,
        start: "top 80%",
        end: "top 40%",
        scrub: 2,
      },
    });

    scrollTimeline
      .fromTo(
        heading2Ref.current,
        {
          scale: 0.5,
          opacity: 0,
          delay:1
        },
        { scale: 1, opacity: 1, duration: 1, ease: "power1.out" }
      )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, scale: 0.4 },
        { opacity: 1, scale: 1, duration: 1 },
        "-=0.4"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 bg-gradient-to-r from-white via-blue-50 to-white text-center px-4 mb-10"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          ref={heading2Ref}
          className="text-3xl md:text-4xl font-bold text-blue-400 mb-4"
        >
          Ready to bring your ideas to life?
        </h2>
        <p ref={paragraphRef} className="text-lg font-semibold mb-8">
          Whether you're starting from scratch or need help enhancing an
          existing project, we're here to help.
        </p>
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-transform duration-300 hover:bg-blue-600 hover:scale-105 cursor-pointer">
            Contact Us
          </button>
          <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-full font-semibold shadow-md transition-transform duration-300 hover:bg-blue-50 hover:scale-105 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
