import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const featuresData = [
    {
      icon: "ri-code-s-slash-line",
      color: "text-blue-600",
      title: "Web Development",
      desc: "Modern, scalable, and responsive websites built with latest technologies.",
    },
    {
      icon: "ri-smartphone-line",
      color: "text-green-600",
      title: "Mobile Optimization",
      desc: "Ensure your website looks amazing on all devices and screen sizes.",
    },
    {
      icon: "ri-paint-brush-line",
      color: "text-pink-600",
      title: "UI/UX Design",
      desc: "Beautiful and user-friendly design tailored to your business needs.",
    },
  ];

  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
  const triggers = []; 

  const setupAnimations = () => {
    triggers.forEach(trigger => trigger.kill());
    triggers.length = 0; // Clear the array

    const isMobile = window.innerWidth < 768;

    const headingAnim = gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 100%",
          end: "top 70%",
          scrub: 2,
        },
      }
    );
    triggers.push(headingAnim.scrollTrigger);

    if (isMobile) {
      cardsRef.current.forEach((card) => {
        const anim = gsap.fromTo(
          card,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
        triggers.push(anim.scrollTrigger);
      });
    } else {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 100%",
          end: "top 70%",
          scrub: 2,
        },
      });

      tl.fromTo(
        cardsRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.04,
          ease: "power1.in",
        },
        "-=0.4"
      );

      triggers.push(tl.scrollTrigger);
    }
  };

  setupAnimations(); // run once on mount

  const handleResize = () => {
    setupAnimations(); // re-run on resize
  };

  window.addEventListener("resize", handleResize);

  // Cleanup only our triggers
  return () => {
    window.removeEventListener("resize", handleResize);
    triggers.forEach(trigger => trigger.kill());
  };
}, []);



  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h2
        ref={headingRef}
        className="text-3xl sm:text-5xl font-extrabold mb-8 sm:mb-12 text-blue-400"
      >
        What We Offer
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group p-8 bg-white border border-blue-100 rounded-3xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 hover:bg-blue-50"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-100 shadow-inner transition-transform duration-300 group-hover:scale-110">
              <i className={`${feature.icon} text-3xl text-blue-600`}></i>
            </div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2 transition-colors duration-300 group-hover:text-blue-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
