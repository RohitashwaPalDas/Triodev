import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    const targets = [
      headingRef.current,
      paragraph1Ref.current,
      paragraph2Ref.current,
      imageRef.current,
    ].filter(Boolean);

    // Define initial states for elements
    const setFromState = (el) => {
      if (el === imageRef.current) {
        gsap.set(el, isMobile ? { opacity: 0, y: 50 } : { opacity: 0, x: 100 });
      } else {
        gsap.set(el, isMobile ? { opacity: 0, y: 20 } : { opacity: 0, x: -100 });
      }
    };

    targets.forEach(setFromState);

    // Batch animation for elements
    ScrollTrigger.batch(targets, {
      start: "top 85%",
      end: "bottom 15%",
      interval: 0.1,
      batchMax: 4,
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

      // Reset state when leaving viewport
      onLeave: (batch) => batch.forEach(setFromState),
      onLeaveBack: (batch) => batch.forEach(setFromState),
    });

    // Refresh on resize for correct animations
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center"
    >
      <div>
        <h2
          ref={headingRef}
          className="text-3xl font-bold text-blue-600 mb-4 will-change-transform"
        >
          Our Story
        </h2>
        <p
          ref={paragraph1Ref}
          className="text-gray-600 mb-4 will-change-transform"
        >
          Triodev started as a college friendship and evolved into a
          professional collaboration. We realized that businesses needed more
          than just a website — they needed a partner who understands both
          design and technology.
        </p>
        <p
          ref={paragraph2Ref}
          className="text-gray-600 will-change-transform"
        >
          Today, we work with clients around the globe, delivering modern,
          scalable, and user-focused solutions that make a real difference.
        </p>
      </div>
      <img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Team brainstorming"
        className="rounded-2xl shadow-lg object-cover w-full h-full will-change-transform"
      />
    </section>
  );
};

export default Story;
