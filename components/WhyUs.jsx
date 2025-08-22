'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const listItemsRef = useRef([]);

  useGSAP(() => {
    // Heading animation
    gsap.from(headingRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play reverse play reverse',
      },
    });

    const items = listItemsRef.current.filter(Boolean);

    // Animate list items one by one using batch
    gsap.set(items, { x: (i) => (i % 2 === 0 ? -100 : 100), opacity: 0 });

    ScrollTrigger.batch(items, {
      start: 'top 80%',
      interval: 0.1,
      batchMax: 4,
      onEnter: (batch) =>
        gsap.to(batch, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
        }),
      onLeave: (batch) => gsap.set(batch, { x: (i) => (i % 2 === 0 ? -100 : 100), opacity: 0 }),
      onLeaveBack: (batch) => gsap.set(batch, { x: (i) => (i % 2 === 0 ? -100 : 100), opacity: 0 }),
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-fixed bg-center bg-cover py-20 text-black"
      style={{ backgroundImage: "url('/images/why-choose-us.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 rounded-lg"></div>
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2
          ref={headingRef}
          className="text-3xl font-bold mb-6"
        >
          Why Choose <span className="orbitron text-blue-600">TrioDev</span>?
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-lg">
          {[
            '✅ Dedicated to your success from day one',
            '✅ Affordable pricing without compromising quality',
            '✅ Transparent process with regular updates',
            '✅ Using latest technologies for future-proof solutions',
          ].map((text, i) => (
            <li
              key={i}
              ref={(el) => (listItemsRef.current[i] = el)}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
