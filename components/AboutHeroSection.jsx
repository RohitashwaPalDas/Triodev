import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutHeroSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    const targets = [
      imageRef.current,
      headingRef.current,
      paragraph1Ref.current,
      paragraph2Ref.current,
    ].filter(Boolean);

    // set individual "from" states so we can reuse the same .to() for batching
    const setFromState = (el) => {
      if (el === imageRef.current) {
        gsap.set(el, isMobile ? { opacity: 0, y: 50 } : { opacity: 0, x: -100 });
      } else {
        gsap.set(el, isMobile ? { opacity: 0, y: 20 } : { opacity: 0, x: 100 });
      }
    };

    targets.forEach(setFromState);

    // Batch elements that enter together and stagger them EVERY time
    ScrollTrigger.batch(targets, {
      start: "top 85%",
      end: "bottom 15%",
      interval: 0.1,     // how long to wait to group elements into a batch
      batchMax: 4,       // max items per batch (we have 4)
      invalidateOnRefresh: true,

      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
        }),

      onEnterBack: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
        }),

      // When leaving the viewport, reset to "from" so it replays on next enter
      onLeave: (batch) => batch.forEach(setFromState),
      onLeaveBack: (batch) => batch.forEach(setFromState),
    });

    // Optional: refresh on resize to recalc mobile/desktop transforms
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center"
    >
      <img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Triodev team working"
        className="rounded-2xl shadow-lg object-cover w-full h-full will-change-transform"
      />
      <div>
        <h1 ref={headingRef} className="text-4xl font-bold text-blue-600 mb-4 will-change-transform">
          About <span className="orbitron">TrioDev</span>
        </h1>
        <p ref={paragraph1Ref} className="text-lg text-gray-600 mb-6 will-change-transform">
          We are a passionate trio of developers dedicated to building
          exceptional digital experiences. Our mission is to help businesses
          grow by crafting websites that are beautiful, functional, and
          impactful.
        </p>
        <p ref={paragraph2Ref} className="text-gray-600 will-change-transform">
          Since our inception, we’ve delivered projects across industries,
          combining creativity, strategy, and technology to create lasting
          results.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
