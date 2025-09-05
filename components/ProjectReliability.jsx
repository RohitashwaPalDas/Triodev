import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectReliability = ({ selectedProject }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".reliability-heading", {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reliability-heading",
          start: "top 85%",
          toggleActions: "restart reverse restart reverse",
        },
      });

      const items = gsap.utils.toArray(".timeline-item");

      // --- measure & set each line's height to the next icon ---
      const layoutLines = () => {
        // guard: no layout if fewer than 2 items
        if (items.length < 2) return;

        items.forEach((item, i) => {
          const line = item.querySelector(".timeline-line");
          const icon = item.querySelector(".step-icon");

          if (!line || !icon) return;

          // last item has no line
          if (i === items.length - 1) {
            line.style.height = "0px";
            return;
          }

          const nextIcon = items[i + 1].querySelector(".step-icon");
          if (!nextIcon) {
            line.style.height = "0px";
            return;
          }

          // compute distance from bottom of current icon to top of next icon
          const currBottom = icon.getBoundingClientRect().bottom;
          const nextTop = nextIcon.getBoundingClientRect().top;

          // distance in px within viewport space
          let gap = nextTop - currBottom;
          // add a tiny cushion to visually meet the next icon
          gap = Math.max(8, gap - 4);

          line.style.height = `${gap}px`;
        });
      };

      layoutLines();
      ScrollTrigger.addEventListener("refreshInit", layoutLines);
      ScrollTrigger.refresh();

      // --- per-item animations ---
      items.forEach((item) => {
        const icon = item.querySelector(".step-icon");
        const content = item.querySelector(".step-content");
        const line = item.querySelector(".timeline-line");

        if (line) {
          gsap.fromTo(
            line,
            { scaleY: 0, transformOrigin: "top center" },
            {
              scaleY: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "restart reverse restart reverse",
              },
            }
          );
        }

        if (content) {
          gsap.from(content, {
            x: -50,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "restart reverse restart reverse",
            },
          });
        }

        if (icon) {
          gsap.from(icon, {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "restart reverse restart reverse",
            },
          });
        }
      });

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", layoutLines);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-inner"
    >
      {/* Heading */}
      <h2 className="reliability-heading text-3xl font-extrabold mb-12 text-blue-900 flex items-center gap-3 justify-center">
        <span className="p-3 bg-blue-200 rounded-full text-blue-800 shadow-md">
          <i className="fa-solid fa-lock fa-bounce"></i>
        </span>
        Reliability
      </h2>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto pr-2 sm:pr-0">
        <div className="space-y-12">
          {selectedProject.reliability.map((point, index) => (
            <div
              key={index}
              className="timeline-item relative flex items-start gap-6"
            >
              {/* Icon column (relative so the line can be absolutely placed) */}
              <div className="flex-shrink-0 relative z-10">
                <div className="step-icon w-12 h-12 flex items-center justify-center bg-white border-2 border-blue-500 rounded-full shadow-md text-blue-600 font-bold">
                  {index + 1}
                </div>

                {/* Line segment (added for all except last) */}
                {index !== selectedProject.reliability.length - 1 && (
                  <div
                    className="
                      timeline-line
                      absolute left-1/2 -translate-x-1/2
                      w-[3px]
                      bg-gradient-to-b from-blue-300 to-blue-600
                      rounded-full
                      /* start just below the icon */
                    "
                    style={{ top: "3.25rem", height: 0 }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="step-content p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-blue-100 w-full">
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectReliability;
