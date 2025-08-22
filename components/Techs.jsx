import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Techs = () => {
  const headingRef = useRef(null);
  const cardRef = useRef([]);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Initial states
    gsap.set(headingRef.current, { opacity: 0, scale: 0.6 });
    gsap.set(cardRef.current, { opacity: 0, scale: 0.6, x: -200 });

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
        gsap.set(batch, { opacity: 0, scale: 0.6, x: -200 }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, scale: 0.6, x: -200 }),
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 ref={headingRef} className="text-3xl font-bold mb-8 text-blue-600">
          Technologies We Love
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {[
            { icon: <FaHtml5 className="text-orange-500 w-16 h-16" />, name: "HTML5" },
            { icon: <FaCss3Alt className="text-blue-500 w-16 h-16" />, name: "CSS3" },
            { icon: <FaJsSquare className="text-yellow-400 w-16 h-16" />, name: "JavaScript" },
            { icon: <FaReact className="text-cyan-400 w-16 h-16" />, name: "React" },
            { icon: <FaNodeJs className="text-green-500 w-16 h-16" />, name: "Node.js" },
            { icon: <SiMongodb className="text-green-600 w-16 h-16" />, name: "MongoDB" },
          ].map((tech, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRef.current[idx] = el)}
              className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              {tech.icon}
              <p className="mt-2 font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techs;
