import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectLinks = ({ selectedProject }) => {
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);
  useGSAP(()=>{
    gsap.set(btn1Ref.current, { opacity: 0, x:-200 });
    ScrollTrigger.create({
      trigger: btn1Ref.current,
      start: "top 85%",
      end: "bottom 15%",
      onEnter: () =>
        gsap.to(btn1Ref.current, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        }),
      onEnterBack: () =>
        gsap.to(btn1Ref.current, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        }),
      onLeave: () => gsap.set(btn1Ref.current, { opacity: 0, x:-200 }),
      onLeaveBack: () =>
        gsap.set(btn1Ref.current, { opacity: 0, x:-200 }),
    });

    gsap.set(btn2Ref.current, { opacity: 0, x:200 });
    ScrollTrigger.create({
      trigger: btn2Ref.current,
      start: "top 85%",
      end: "bottom 15%",
      onEnter: () =>
        gsap.to(btn2Ref.current, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        }),
      onEnterBack: () =>
        gsap.to(btn2Ref.current, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        }),
      onLeave: () => gsap.set(btn2Ref.current, { opacity: 0, x:200 }),
      onLeaveBack: () =>
        gsap.set(btn2Ref.current, { opacity: 0, x:200 }),
    });

  },[])
    
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-12">
      <a
      ref={btn1Ref}
        href={selectedProject.liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-700 hover:scale-105 transition transform duration-300"
      >
        🚀 Live Demo
      </a>
      <a
      ref={btn2Ref}
        href={selectedProject.github}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:bg-gray-800 hover:scale-105 transition transform duration-300"
      >
        💻 View Code
      </a>
    </div>
  );
};

export default ProjectLinks;
