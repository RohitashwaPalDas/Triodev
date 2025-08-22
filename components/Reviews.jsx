'use client';
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useGSAP(() => {
  // Animate heading
  gsap.from(headingRef.current, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: headingRef.current,
      start: "top 100%",
      end: "bottom 10%",
      toggleActions: "play reverse play reverse", // runs each time
    },
  });

  // Batch animate cards
  ScrollTrigger.batch(cardsRef.current, {
    start: "top 85%",
    end: "bottom 20%",
    onEnter: (batch) => {
      gsap.from(batch, {
        opacity: 0,
        y: 40,
        x: (i) => (i % 2 === 0 ? -100 : 100), // alternate direction
        scale: 0.6,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.3, // one by one
      });
    },
    onEnterBack: (batch) => {
      gsap.from(batch, {
        opacity: 0,
        y: 40,
        x: (i) => (i % 2 === 0 ? -100 : 100),
        scale: 0.6,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.3,
      });
    },
  });
}, []);




  const reviews = [
    {
      name: "Alice Johnson",
      feedback:
        "Triodev transformed our online presence. The team is creative, responsive, and professional.",
    },
    {
      name: "Michael Brown",
      feedback:
        "They delivered our project on time and exceeded expectations. Highly recommended!",
    },
    {
      name: "Michael Brown",
      feedback:
        "They delivered our project on time and exceeded expectations. Highly recommended!",
    },
    {
      name: "Michael Brown",
      feedback:
        "They delivered our project on time and exceeded expectations. Highly recommended!",
    },
    {
      name: "Michael Brown",
      feedback:
        "They delivered our project on time and exceeded expectations. Highly recommended!",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 ref={headingRef} className="text-3xl font-bold mb-8 text-blue-600">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((test, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <p className="text-gray-600 italic mb-4">“{test.feedback}”</p>
              <h4 className="font-semibold text-blue-500">{test.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
