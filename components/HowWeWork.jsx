import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowWeWork = () => {
  const headingRef = useRef(null);
  const cardRef = useRef([]);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Heading animation
    gsap.from(headingRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Cards animation with batching for one-by-one appearance
    const cards = cardRef.current.filter(Boolean); // ensure all elements exist
    gsap.set(cards, { y: 50, opacity: 0 }); // initial state

    ScrollTrigger.batch(cards, {
      start: "top 85%",
      end: "bottom 20%",
      interval: 0.1, // group quickly appearing cards
      batchMax: 4, // max cards per batch
      onEnter: (batch) =>
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          onComplete: () => {
            batch.forEach((card) => {
              gsap.to(card, {
                y: -5,
                repeat: -1,
                yoyo: true,
                duration: 2,
                ease: "sine.inOut",
              });
            });
          },
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          onComplete: () => {
            batch.forEach((card) => {
              gsap.to(card, {
                y: -5,
                repeat: -1,
                yoyo: true,
                duration: 2,
                ease: "sine.inOut",
              });
            });
          },
        }),
      onLeave: (batch) => gsap.set(batch, { y: 50, opacity: 0 }),
      onLeaveBack: (batch) => gsap.set(batch, { y: 50, opacity: 0 }),
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          ref={headingRef}
          className="text-3xl font-bold text-center mb-12 text-blue-600"
        >
          How We Work
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            {
              step: "1",
              title: "Discovery",
              desc: "Understanding your goals & needs.",
            },
            {
              step: "2",
              title: "Design",
              desc: "Crafting intuitive user experiences.",
            },
            {
              step: "3",
              title: "Development",
              desc: "Building scalable, secure systems.",
            },
            {
              step: "4",
              title: "Launch",
              desc: "Deploying and providing ongoing support.",
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardRef.current[i] = el)}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-blue-500 text-white rounded-full text-lg font-bold">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-blue-500">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
