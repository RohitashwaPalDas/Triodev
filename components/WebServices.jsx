import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import webServices from "@/data/webServices";

gsap.registerPlugin(ScrollTrigger);

const WebServices = ({}) => {
  

  const headingRef = useRef(null);
  const subHeadRef = useRef(null);
  const serviceRef = useRef([]);
  const sliderRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // check scroll position for arrows
  const checkScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const slider = sliderRef.current;
    slider.addEventListener("scroll", checkScroll);
    return () => slider.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction) => {
    const slider = sliderRef.current;
    const scrollAmount = slider.clientWidth * 0.8; // slide by 80% width
    slider.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // GSAP animations
  useGSAP(() => {
    gsap.from(headingRef.current, {
      scale: 0.6,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "restart reverse restart reverse",
      },
    });

    gsap.from(subHeadRef.current, {
      scale: 0.6,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: subHeadRef.current,
        start: "top 80%",
        toggleActions: "restart reverse restart reverse",
      },
    });

    gsap.set(serviceRef.current, { opacity: 0, scale: 0.4 });

    ScrollTrigger.batch(serviceRef.current, {
      start: "top 80%",
      end: "bottom 15%",
      onEnter: (batch) =>
        gsap.fromTo(
          batch,
          { scale: 0.4, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            overwrite: "auto",
          }
        ),
      onLeave: (batch) =>
        gsap.fromTo(
          batch,
          { scale: 1, opacity: 1 },
          {
            scale: 0.4,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
            overwrite: "auto",
          }
        ),
      onEnterBack: (batch) =>
        gsap.fromTo(
          batch,
          { scale: 0.4, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            overwrite: "auto",
          }
        ),
      onLeaveBack: (batch) =>
        gsap.fromTo(
          batch,
          { scale: 1, opacity: 1 },
          {
            scale: 0.4,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
            overwrite: "auto",
          }
        ),
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="py-10 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          ref={headingRef}
          className="text-4xl font-bold text-center mb-4 text-blue-600"
        >
          Our Web Services
        </h2>
        <p
          ref={subHeadRef}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
        >
          We offer end-to-end digital solutions to help your business thrive
          online. From design to deployment and beyond, we've got you covered.
        </p>

        {/* Slider wrapper with arrows */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className={`hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-blue-50 transition-opacity duration-300 z-10 ${
                canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
          )}

          {/* Horizontal slider */}
          <div
            ref={sliderRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 py-2 scrollbar-hide-x"
          >
            {webServices.map((service, index) => (
              <div
                key={index}
                ref={(el) => (serviceRef.current[index] = el)}
                className={`min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] snap-center p-6 rounded-lg shadow-lg cursor-pointer transition`}
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className={`hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-blue-50 transition-opacity duration-300 z-10 ${
                canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default WebServices;
