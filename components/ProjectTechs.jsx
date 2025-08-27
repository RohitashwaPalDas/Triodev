import React from "react";

const ProjectTechs = ({ selectedProject }) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 via-sky-50 to-blue-100 rounded-3xl p-10 shadow-lg overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-10 text-blue-800 flex items-center gap-3">
        <lord-icon
          src="https://cdn.lordicon.com/asyunleq.json"
          trigger="loop"
          state="loop-cog"
          colors="primary:#4030e8"
          class="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12"
        ></lord-icon>
        Tech Stack
      </h2>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {selectedProject.techStack.map((tech, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-6 bg-white/60 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:scale-110 border border-blue-100"
          >
            {/* Tech Logo */}
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-14 h-14 object-contain mb-3 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
            />
            {/* Tech Name */}
            <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Decorative gradient glows */}
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-sky-300/30 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
};

export default ProjectTechs;
