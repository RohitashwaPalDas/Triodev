"use client";

import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import projects from "@/data/projectData";
import Link from "next/link";

const WorkPage = () => {
  const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with single dash
    .replace(/^-+|-+$/g, ""); // remove leading/trailing dashes

  return (
    <div className="min-h-screen py-10 relative overflow-hidden">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 via-sky-100 to-blue-50 grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto mb-24 relative z-10 rounded-lg shadow-lg p-8 md:p-16">

        {/* Left Side - Text */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">
            Our Works
          </h1>
          <p className="text-gray-700 mt-6 text-lg leading-relaxed max-w-lg">
            Discover some of our{" "}
            <span className="font-semibold text-indigo-600">most impactful projects</span>{" "}
            where creativity meets technology. We build solutions that inspire,
            engage, and make life easier.
          </p>

          {/* Call to Action */}
          <button className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-blue-700 transition">
            Start a Project <FaExternalLinkAlt size={16} />
          </button>
        </div>

        {/* Right Side - Illustration / Picture */}
        <div className="w-full flex justify-center md:justify-end">
          
          <DotLottieReact
            src="https://lottie.host/acc2a738-b345-47ad-86f2-1a0c9523038e/cYYG9AKovz.lottie"
            loop
            autoplay
            className="w-[80%] sm:w-[70%] md:w-[500px] lg:w-[600px] scale-125 sm:scale-150 mx-auto drop-shadow-lg"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <Link
            key={index}
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

      
    </div>
  );
};

export default WorkPage;
