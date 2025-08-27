import React from "react";

const ProjectClientImpact = ({ selectedProject }) => {
  return (
    <div className="relative">
      <h2 className="text-3xl font-bold mb-10 text-blue-800 flex items-center gap-3">
        <span className="text-4xl">
          <lord-icon
            src="https://cdn.lordicon.com/tyntlpjn.json"
            trigger="loop"
            state="loop-rotate"
            colors="primary:#2516c7,secondary:#4bb3fd"
            class="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12"
          ></lord-icon>
        </span>{" "}
        Client Impact
      </h2>

      <ul className="grid md:grid-cols-2 gap-8 relative">
        {selectedProject.clientImpact.map((impact, index) => (
          <li
            key={index}
            className="group relative bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6 rounded-2xl border border-blue-200 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            {/* Decorative icon bubble */}
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
              {index + 1}
            </div>

            {/* Content */}
            <p className="text-gray-700 text-lg leading-relaxed pl-2">
              {impact}
            </p>

            {/* Hover effect underline */}
            <span className="absolute bottom-2 left-6 w-0 h-[3px] bg-blue-600 group-hover:w-2/3 transition-all duration-300 rounded-full"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectClientImpact;
