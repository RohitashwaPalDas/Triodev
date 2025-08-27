import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ProjectTitle = ({ selectedProject }) => {
  return (
    <div className="relative w-full bg-gradient-to-r from-blue-50 via-sky-100 to-blue-50 rounded-3xl shadow-lg p-10 md:p-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
        {/* Animation */}
        <div className="w-full md:w-1/2 flex justify-center">
          <DotLottieReact
            src={selectedProject.animation}
            loop
            autoplay
            width={400}
            height={400}
            className="drop-shadow-2xl"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-blue-500 bg-clip-text text-transparent">
              {selectedProject.title}
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
            {selectedProject.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectTitle;
