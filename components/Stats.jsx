import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const statsRef = useRef([]);

  useEffect(() => {
    gsap.set(statsRef.current, { opacity: 0, scale: 0.8 });

    statsRef.current.forEach((el) => {
      let numElement = el.querySelector("h3");
      let finalValue = numElement.dataset.value;

      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onStart: () => {
            // Count-up animation
            gsap.fromTo(
              numElement,
              { innerText: 0 },
              {
                innerText: parseInt(finalValue),
                duration: 2,
                ease: "power1.out",
                snap: { innerText: 1 },
                onUpdate: function () {
                  numElement.innerText =
                    finalValue.includes("+") || finalValue.includes("%")
                      ? Math.floor(numElement.innerText) +
                        finalValue.replace(/[0-9]/g, "")
                      : Math.floor(numElement.innerText);
                },
                onComplete: () => {
                  // Bounce effect after counting
                  gsap.to(el, {
                    y: -10,
                    duration: 0.3,
                    ease: "power1.out",
                    yoyo: true,
                    repeat: 1,
                  });
                },
              }
            );
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
        {[
          { num: "3+", label: "Years of Combined Experience" },
          { num: "10+", label: "Projects Delivered" },
          { num: "5+", label: "Happy Clients" },
          { num: "100%", label: "Client Satisfaction" },
        ].map((stat, idx) => (
          <div key={idx} ref={(el) => (statsRef.current[idx] = el)}>
            <h3
              className="text-4xl font-bold text-blue-500"
              data-value={stat.num}
            >
              {stat.num}
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
