import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Missions = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.set(cardsRef.current, { opacity: 0, scale: 0.6, x: -50 });

    ScrollTrigger.batch(cardsRef.current, {
      start: "top 80%", // Trigger when card is near viewport
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          scale: 1,
          x: 0,
          stagger: 0.2,
          ease: "power3.out",
          duration: 0.8
        });
      },
      onEnterBack: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          scale: 1,
          x: 0,
          stagger: 0.2,
          ease: "power3.out",
          duration: 0.8
        });
      },
      onLeave: (batch) => {
        gsap.to(batch, {
          opacity: 0,
          scale: 0.6,
          x: -50,
          duration: 0.3
        });
      },
      onLeaveBack: (batch) => {
        gsap.to(batch, {
          opacity: 0,
          scale: 0.6,
          x: -50,
          duration: 0.3
        });
      },
      once: false // Ensure animation works every time
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {[
          {
            title: "Our Mission",
            desc: "Empower businesses with top-quality digital solutions.",
          },
          {
            title: "Our Vision",
            desc: "Becoming a trusted global web development partner.",
          },
          {
            title: "Our Values",
            desc: "Transparency, quality, innovation, and client-focus.",
          },
        ].map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Missions;
