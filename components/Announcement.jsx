import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Announcement = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);

  useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 80%", 
      end: "bottom 20%",
      toggleActions: "play play restart restart", 
      // markers: true,
    },
    defaults: { duration: 0.7, ease: "power3.out" },
  });

  tl.from(headingRef.current, { scale: 0.6, opacity: 0 })
    .from(paragraph1Ref.current, { x: 30, opacity: 0})
    .from(paragraph2Ref.current, { x: -30, opacity: 0}, "-=0.4");
}, []);


  return (
    <section
      ref={containerRef}
      className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-16 px-6 text-center rounded-lg "
    >
      <div className="max-w-4xl mx-auto">
        <h2 ref={headingRef} className="text-4xl font-bold text-blue-600 mb-4">
          From Vision to Reality — Our Journey Begins
        </h2>
        <p
          ref={paragraph1Ref}
          className="text-lg text-gray-700 leading-relaxed"
        >
          In 2024, a spark was lit — three passionate minds came together with
          one goal: to redefine web experiences. What began as a small
          collaboration has now evolved into{" "}
          <span className="font-semibold text-blue-500 orbitron">TrioDev</span>,
          your trusted partner for innovative, high-quality web solutions.
        </p>
        <p ref={paragraph2Ref} className="mt-4 text-lg text-gray-600">
          As we move into 2025, we're not just offering services — we're
          building a community where design meets purpose, technology meets
          creativity, and your vision meets its perfect digital form.
        </p>
      </div>
    </section>
  );
};

export default Announcement;
