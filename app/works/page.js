"use client";

import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const WorkPage = () => {
  const projects = [
    {
      title: "Rythmix - Your Music Companion",
      description:
        "A full-featured music streaming platform with playlists, queue, history, and player system.",
      img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/381368608/original/e7739f97ed5230acde4c301d8a5659317fa939ed/develop-music-streaming-app-spotify-clone-app-radio-app-podcast-streaming-app.png",
    },
    {
      title: "BongHut - Your Online Shopping Hub",
      description:
        "An online shopping platform with cart, wishlist, product filters, and secure checkout.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQR5BF8qByqLxlu08Q3uvS_LVl0wxoSQPpEQ&s",
    },
    {
      title: "Rydo - Instant Ride Booking",
      description:
        "A ride-hailing application that allows users to book cabs with real-time updates.",
      img: "https://cdn.dribbble.com/userupload/24350241/file/original-d7184b5518f7471c646adfa61c1930b9.png?format=webp&resize=400x300&vertical=center",
    },
    {
      title: "Wanderlust - Travel Booking Made Easy",
      description:
        "A property rental platform with booking, user authentication, and review system.",
      img: "https://img.freepik.com/free-vector/organic-flat-hotel-landing-page-with-illustrations_52683-59689.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

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
          {/* <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3845276-3204013.png?f=webp"
            alt="Projects Illustration"
            className="w-96 md:w-[420px] drop-shadow-lg animate-fadeIn"
          /> */}
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
          <div
            key={index}
            className="group relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden border border-gray-200 transform hover:-translate-y-3"
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
          </div>
        ))}
      </div>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1.2s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default WorkPage;
