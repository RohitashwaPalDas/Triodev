import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectTechs = ({ selectedProject }) => {
  const headingRef = useRef(null);
    const cardRef = useRef([]);
    const sectionRef = useRef(null);
  
    useGSAP(() => {
      // Initial states
      gsap.set(headingRef.current, { opacity: 0, scale: 0.6 });
      gsap.set(cardRef.current, { opacity: 0, scale: 0.6, x: 200 });
  
      // Heading animation
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () =>
          gsap.to(headingRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          }),
        onEnterBack: () =>
          gsap.to(headingRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          }),
        onLeave: () => gsap.set(headingRef.current, { opacity: 0, scale: 0.6 }),
        onLeaveBack: () => gsap.set(headingRef.current, { opacity: 0, scale: 0.6 }),
      });
  
      // Cards animation with reverse order on scroll up
      ScrollTrigger.batch(cardRef.current, {
        start: "top 85%",
        end: "bottom 15%",
        interval: 0.1,
        batchMax: 6,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            delay: 0.2, // after heading
          }),
        onEnterBack: (batch) =>
          gsap.to([...batch].reverse(), {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            delay: 0.2,
          }),
        onLeave: (batch) =>
          gsap.set(batch, { opacity: 0, scale: 0.6, x: 200 }),
        onLeaveBack: (batch) =>
          gsap.set(batch, { opacity: 0, scale: 0.6, x: 200 }),
      });
    }, []);
  return (
    <div ref={sectionRef} className="relative bg-gradient-to-r from-blue-50 via-sky-50 to-blue-100 rounded-3xl p-10 shadow-lg overflow-hidden">
      {/* Heading */}
      <h2 ref={headingRef} className="text-3xl font-bold mb-10 text-blue-800 flex items-center gap-3">
        <lord-icon
          src="https://cdn.lordicon.com/asyunleq.json"
          trigger="loop"
          state="loop-cog"
          colors="primary:#4030e8"
          class="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12"
        ></lord-icon>
        Tech Stack
      </h2>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        {selectedProject.techStack.map((tech, index) => (
          <div
            key={index}
            ref={(el) => (cardRef.current[index] = el)}
            className="group flex flex-col items-center justify-center p-6 bg-white/60 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:scale-110 border border-blue-100"
          >
            {/* Tech Logo */}
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-14 h-14 object-contain mb-3 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
            />
            {/* Tech Name */}
            <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Decorative gradient glows */}
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-sky-300/30 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
};

export default ProjectTechs;
