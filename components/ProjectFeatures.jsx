import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";
import { CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ProjectFeatures = ({ selectedProject }) => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useGSAP(() => {
  // Animate heading
  gsap.set(headingRef.current, { opacity: 0, scale: 0.6 });
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

  gsap.set(cardsRef.current, { opacity: 0, scale: 0.6, x: (i) => (i % 2 === 0 ? -200 : 200), });

  // Batch animate cards
  ScrollTrigger.batch(cardsRef.current, {
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
          gsap.set(batch, { opacity: 0, scale: 0.6, x: (i) => (i % 2 === 0 ? -200 : 200)}),
        onLeaveBack: (batch) =>
          gsap.set(batch, { opacity: 0, scale: 0.6, x: (i) => (i % 2 === 0 ? -200 : 200) }),
      });
}, []);
  return (
    <div ref={sectionRef}>
      <h2 ref={headingRef} className="text-3xl font-bold mb-8 text-blue-800 flex items-center gap-3">
        <Sparkles className="w-10 h-10 text-yellow-500" /> Features
      </h2>
      <ul className="grid md:grid-cols-2 gap-6">
        {selectedProject.features.map((feature, index) => (
          <li
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="p-6 bg-gradient-to-r from-blue-50 via-sky-50 to-blue-100 border border-blue-200 rounded-xl shadow hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
              <p className="text-gray-800 text-lg font-medium">{feature}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFeatures;
