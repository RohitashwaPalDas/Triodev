import React from "react";

const ProjectBusinessValue = ({ selectedProject }) => {
  return (
    <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl border border-blue-200 shadow-xl p-10 hover:shadow-2xl transition-all duration-500">
      {/* Decorative gradient glow */}
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-300 rounded-full blur-3xl opacity-30"></div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 text-blue-800 flex items-center gap-4 relative z-10">
        {/* Icon Wrapper */}
        <span className="flex items-center justify-center p-1 sm:p-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full shadow-lg border border-blue-200">
          <lord-icon
            src="https://cdn.lordicon.com/qaeqyqcc.json"
            trigger="loop"
            state="loop-cycle"
            colors="primary:#3080e8,secondary:#ffc738,tertiary:#3080e8,quaternary:#3080e8,quinary:#ebe6ef"
            class="w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10"
          ></lord-icon>
        </span>

        {/* Title */}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500 drop-shadow-sm">
          Business Value
        </span>
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed relative z-10">
        {selectedProject.businessValue}
      </p>
    </div>
  );
};

export default ProjectBusinessValue;
