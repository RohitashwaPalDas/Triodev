import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import projects from "@/data/projectData";
import Link from "next/link";

const Projects = () => {
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const sectionref = useRef(null);
  const projectRef = useRef([]);

  useGSAP(()=>{
    projectRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 87%",
            end: "bottom 5%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  })
  return (
    <div
      ref={sectionref}
      className="grid sm:grid-cols-2 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto relative z-10"
    >
      {projects.map((project, index) => (
        <Link
          key={index}
          ref={(el) => (projectRef.current[index] = el)}
          className="group relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden border border-gray-200 transform hover:-translate-y-3"
          href={`/project/${slugify(project.title)}`}
        >
          {/* Image with hover zoom */}
          <div className="overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition">
              {project.title}
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              {project.description}
            </p>

            {/* Button */}
            <button className="mt-5 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-5 py-2.5 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-blue-700 transition">
              View Project <FaExternalLinkAlt size={14} />
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
