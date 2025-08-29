import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectImages = ({ selectedProject }) => {
  const activeImgRef = useRef(null);
  const cardRef = useRef([]);
  const cardSecRef = useRef(null);
  const [activeImage, setActiveImage] = useState(selectedProject.img[0]);

  useGSAP(()=>{
    gsap.fromTo(activeImgRef.current, 
      {opacity:0, x:-100}, 
      {
        opacity:1, x:0, duration:0.8,
        scrollTrigger:{
          trigger:activeImgRef.current,
          start:"top 80%",
          end:"bottom 20%",
          toggleActions:"restart reverse restart reverse",
        }
      }
    );

    gsap.fromTo(
      cardRef.current, // <-- array of card elements
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2, // animate one by one ✨
        ease: "power1.in",
        scrollTrigger: {
          trigger: cardSecRef.current,
          start: "top 80%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
   
  },[])
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start">
      {/* Active Image */}
      <div ref={activeImgRef} className="w-full md:w-5/6">
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img
            src={activeImage}
            alt="Active"
            className="
          w-full 
          h-[10rem] sm:h-[24rem] md:h-[32rem] 
          object-cover 
          transform hover:scale-105 transition duration-500
        "
          />
        </div>
      </div>

      {/* Image Thumbnails */}
      <div className="w-full md:w-1/6" ref={cardSecRef}>
        <div
          className="
        flex gap-4
        overflow-x-auto md:overflow-y-auto
        md:flex-col
        max-h-[32rem]
        pr-2
        scrollbar-thin scrollbar-thumb-blue-500/70 scrollbar-track-transparent
      "
        >
          {selectedProject.img.map((image, index) => (
            <div
              key={index}
              ref={(el) => (cardRef.current[index] = el)}
              className={`flex-shrink-0 overflow-hidden rounded-xl shadow cursor-pointer border-2 transition duration-300 ${
                activeImage === image ? "border-blue-600" : "border-transparent"
              }`}
              onClick={() => setActiveImage(image)}
            >
              <img
                src={image}
                alt={`Thumbnail-${index}`}
                className="w-28 h-20 md:w-full md:h-28 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectImages;
